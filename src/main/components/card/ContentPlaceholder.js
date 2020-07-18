import * as React from "react";
import {LoremIpsum} from "react-lorem-ipsum";
import {motion, useInvertedScale} from "framer-motion";
import {useState, useEffect} from "react";

export const ContentPlaceholder = ({detailData}) => {
  const inverted = useInvertedScale();

  return  (
      <motion.div
        className="content-container overflow-scroll"
        style={{...inverted, originY: 0, originX: 0}}
      >
        <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
      </motion.div>
  )
};

export default ContentPlaceholder;
