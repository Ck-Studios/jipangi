import * as React from "react";
import {memo, useRef} from "react";
import {motion, useMotionValue} from "framer-motion";
import {useInvertedBorderRadius} from "main/components/utils/use-inverted-border-radius";
import ContentPlaceholder from "main/components/card/ContentPlaceholder";
import Title from "main/components/card/Title";
import Image from "main/components/card/Image";
import {closeSpring, openSpring} from "main/components/card/animations";
import {useScrollConstraints} from "main/components/utils/use-scroll-constraints";
import {useWheelScroll} from "main/components/utils/use-wheel-scroll";
import {useRouter} from "next/router";
import Link from "next/link";

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 150;

export const Card = ({
                       isSelected,
                       id,
                       title,
                       category,
                       pointOfInterest,
                       backgroundColor,
                       onClick,
                       onDismiss,
                       detailData
                     }) => {
  const router = useRouter();
  const y = useMotionValue(0);
  const zIndex = useMotionValue(isSelected ? 2 : 0);

  // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
  const inverted = useInvertedBorderRadius(20);

  // We'll use the opened card element to calculate the scroll constraints
  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);

  function checkSwipeToDismiss() {
    // onDismiss();
    y.get() > dismissDistance && onDismiss();
    // router.push("/");
  }

  function checkZIndex(latest) {
    if (isSelected) {
      zIndex.set(2);
    } else if (!isSelected && latest.scaleX < 1.01) {
      zIndex.set(0);
    }
  }

  // When this card is selected, attach a wheel event listener
  const containerRef = useRef(null);
  // useWheelScroll(
  //   containerRef,
  //   y,
  //   constraints,
  //   checkSwipeToDismiss,
  //   isSelected
  // );

  return (
    <li ref={containerRef} className={`card`} onClick={isSelected ? onDismiss : onClick}>
      <div className={`card-content-container ${isSelected && "open"}`}>
        <motion.div
          ref={cardRef}
          className="card-content"
          style={{...inverted, zIndex, y}}
          layoutTransition={isSelected ? openSpring : closeSpring}
          drag={isSelected ? "y" : false}
          dragConstraints={constraints}
          onClick={checkSwipeToDismiss}
          onUpdate={checkZIndex}
        >
          <Image
            id={ Math.floor(Math.random() * (4)) + 1}
            isSelected={isSelected}
            pointOfInterest={pointOfInterest}
            backgroundColor={backgroundColor}
          />
          <Title title={title} category={category} isSelected={isSelected}/>
          <ContentPlaceholder
            detailData={detailData}
          />
        </motion.div>
      </div>
    </li>
  );
};

const Overlay = ({isSelected, onDismiss}) => (
  <motion.div
    onClick={onDismiss}
    initial={false}
    animate={{opacity: isSelected ? 1 : 0}}
    transition={{duration: 0.2}}
    style={{pointerEvents: isSelected ? "auto" : "none"}}
    className="overlay"
  >

  </motion.div>
);

export default Card;
