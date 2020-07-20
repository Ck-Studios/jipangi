import CardList from "main/components/card/CardList";
import {useEffect, useState} from "react";
import CardLayout from "main/components/CardLayout";
import Card from "main/components/card/Card";
import {Modal} from "main/components/modal/Modal";
import {HoverImage, Layout} from "main/components/animations";
import {testData} from "main/components/dataSet";
import Notion from "main/components/Notion";
import {cardData} from "main/components/dataSet";
import {motion} from "framer-motion";



const variants = {
  visible: {
    width: "100%",
    opacity: 1,
    scale: 1,
    transition: {duration: 0.8, ease: [0.48, 0.15, 0.25, 0.96]}
  },

  initial: {
    width: 50,
    opacity: 0.5,
    scale: 0.2,
    transition: {duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96]}
  },

  exit: {
    opacity: 0,
    scale: 0.7,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};


export default function MainContainer(props) {
  const [data, setData] = useState(null);
  const [selectedCardID, selectCard] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const [showModal, toggleModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const showItem = (item) => {
    setSelectedItem(item);
    toggleModal(true);
  };

  const hideItem = () => {
    setSelectedItem(null);
    toggleModal(false);
  };

  useEffect(() => {
    const _array = [];
    for (let i = 0; i < 20; ++i) {
      _array.push(i);
    }
    setData(_array);
  }, []);

  // mobile:w-full tablet:max-w-xs laptop:max-w-xs desktop:max-w-xs

  return (
    <motion.div
      className="pt-16 relative"
      variants={variants}
      animate="visible"
      initial="initial"
    >
      {
        showModal &&
          <Modal onDismiss={() => hideItem()}>
            {
              selectedItem?.type === "iframe" ?
                <iframe src={selectedItem?.link} width="100%" height="100%"/>
                :
                <Notion
                  url={selectedItem?.link}
                />
            }
          </Modal>
      }
      <div className="w-full h-full mx-auto" style={{maxWidth: 1600}}>
        <div className="w-full desktop:px-8 laptop:px-6 mobile:px-4 tablet:px-4 mx-auto h-16 flex justify-between items-center mb-8 ">
          <p className="font-bold text-5xl">
            For You 🎁<br/>
          </p>

        </div>
        <div className="flex desktop:px-8 laptop:px-6 tablet:px-4 mobile:px-4 flex-wrap desktop:flex-no-wrap mobile:justify-between tablet:justify-between laptop:justify-between desktop:justify-between mb-8">
          <div
            className="mobile:w-full tablet:w-1/2 laptop:w-1/3 desktop:w-1/4 flex justify-center tablet:pr-2 mobile:mb-4 tablet:mb-4"
            style={{height: 450}}
          >
            <HoverImage
              className="mobile:w-full tablet:w-full laptop:max-w-xs desktop:max-w-xs object-cover object-center rounded-lg overflow-hidden shadow-lg"
              src="/static/images/illust1.jpg"
            />
          </div>

          <div
            className="mobile:w-full tablet:w-1/2 flex justify-center laptop:hidden desktop:block desktop:w-1/4 mobile:block tablet:block tablet:pl-2 mobile:mb-4 tablet:mb-4"
            style={{height: 450}}
          >
            <HoverImage
              className="mobile:w-full tablet:w-full h-full laptop:max-w-xs desktop:max-w-xs object-cover object-center rounded-lg overflow-hidden shadow-lg"
              src="/static/images/poster1.jpg"
            />
          </div>

          <div
            className="mobile:w-full tablet:w-full laptop:w-3/5 desktop:w-1/2 bg-pink-500 b-8 flex laptop:mr-10 justify-center rounded-lg overflow-hidden shadow-lg"
            style={{height: 450}}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5ZGsrbQbcbE" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
          </div>
        </div>
        <div className="w-full mt-16 desktop:px-8 laptop:px-6 mobile:px-4 tablet:px-4 mx-auto h-12 flex items-center mb-8">
          <p className="font-bold text-4xl">
            알아두면 좋아요
          </p>
        </div>
        <div className="w-full h-full desktop:px-8 laptop:px-6 tablet:px-4 mobile:px-4  pt-10 flex flex-wrap">
          {
            testData?.map((item, index) => (
              <div
                onClick={() => showItem(item)}
                className={`desktop:w-1/4 mobile:w-full laptop:w-1/3 tablet:w-1/2 mb-8 flex justify-center tablet:${index % 2 === 0 ? "pr-2" : "pl-2"}`}
                key={index.toString()}
              >
                <CardLayout
                  item={item}
                />
              </div>
            ))
          }
        </div>
        <div className="w-full mt-16 desktop:px-8 laptop:px-6 mobile:px-4 tablet:px-4 mx-auto h-12 flex items-center mb-8">
          <p className="font-bold text-4xl">
            이런건 어때요?
          </p>
        </div>
        <div className="card-list desktop:px-8 laptop:px-6 tablet:px-4 mobile:px-4">

        </div>
      </div>
    </motion.div>
  )
}


