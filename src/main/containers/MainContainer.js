import CardList from "main/components/card/CardList";
import {useEffect, useState} from "react";
import CardLayout from "main/components/CardLayout";
import {Overlay} from "main/components/modal/modal";
import Card from "main/components/card/Card";

const cardData = [
  // Photo by ivan Torres on Unsplash
  {
    id: "c",
    category: "Pizza",
    title: "5 Food Apps Delivering the Best of Your City",
    pointOfInterest: 80,
    backgroundColor: "#814A0E"
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: "f",
    category: "How to",
    title: "Arrange Your Apple Devices for the Gram",
    pointOfInterest: 120,
    backgroundColor: "#959684"
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "a",
    category: "Pedal Power",
    title: "Map Apps for the Superior Mode of Transport",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2"
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: "g",
    category: "Holidays",
    title: "Our Pick of Apps to Help You Escape From Apps",
    pointOfInterest: 200,
    backgroundColor: "#8F986D"
  },
  // Photo by Simone Hutsch on Unsplash
  {
    id: "d",
    category: "Photography",
    title: "The Latest Ultra-Specific Photography Editing Apps",
    pointOfInterest: 150,
    backgroundColor: "#FA6779"
  },
  // Photo by Siora Photography on Unsplash
  {
    id: "h",
    category: "They're all the same",
    title: "100 Cupcake Apps for the Cupcake Connoisseur",
    pointOfInterest: 60,
    backgroundColor: "#282F49"
  },
  // Photo by Yerlin Matu on Unsplash
  {
    id: "e",
    category: "Cats",
    title: "Yes, They Are Sociopaths",
    pointOfInterest: 200,
    backgroundColor: "#AC7441"
  },
  // Photo by Ali Abdul Rahman on Unsplash
  {
    id: "b",
    category: "Holidays",
    title: "Seriously the Only Escape is the Stratosphere",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  }
];


export default function MainContainer(props) {
  const [data, setData] = useState(null);
  const [selectedCardID, selectCard] = useState(null);
  const [detailData, setDetailData] = useState(null);

  async function fetchDetailData() {
    try {
      const _data = await fetch(
        `https://notion-api.splitbee.io/v1/page/4ab1d3c7e8d943df82d81e97a01d3857`
      ).then(res => res.json());
      await setDetailData({blockMap: _data})
    } catch (err) {
      console.log("err", err);
    }
  }

  console.log("detailData:::", detailData);

  useEffect(() => {
    const _array = [];
    for (let i = 0; i < 20; ++i) {
      _array.push(i);
    }
    setData(_array);
    fetchDetailData();
  }, []);

  // mobile:w-full tablet:max-w-xs laptop:max-w-xs desktop:max-w-xs

  return detailData && (
    <div className="pt-16">
      <div className="w-full h-full mx-auto" style={{maxWidth: 1600}}>
        <div className="w-full desktop:px-8 laptop:px-6 mobile:px-4 tablet:px-4 mx-auto h-16 flex items-center mb-8">
          <p className="font-bold text-4xl">
            For You 🎁
          </p>
        </div>
        <div className="flex desktop:px-8 laptop:px-6 tablet:px-4 mobile:px-4 flex-wrap desktop:flex-no-wrap mobile:justify-between tablet:justify-between laptop:justify-between desktop:justify-between mb-8">
          <div
            className="mobile:w-full tablet:w-1/2 laptop:w-1/3 desktop:w-1/4 flex justify-center tablet:pr-2 mobile:mb-4 tablet:mb-4"
            style={{height: 450}}
          >
            <img
              className="mobile:w-full tablet:w-full laptop:max-w-xs desktop:max-w-xs object-cover object-center rounded-lg overflow-hidden"
              src="/static/images/illust1.jpg"
            />
          </div>

          <div
            className="mobile:w-full tablet:w-1/2 flex justify-center laptop:hidden desktop:block desktop:w-1/4 mobile:block tablet:block tablet:pl-2 mobile:mb-4 tablet:mb-4"
            style={{height: 450}}
          >
            <img
              className="mobile:w-full tablet:w-full h-full laptop:max-w-xs desktop:max-w-xs object-cover object-center rounded-lg overflow-hidden"
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
            data?.map((item, index) => (
              <div
                className={`desktop:w-1/4 mobile:w-full laptop:w-1/3 tablet:w-1/2 mb-8 flex justify-center tablet:${index % 2 === 0 ? "pr-1" : "pl-1"}`}
                key={index.toString()}
              >
                <CardLayout/>

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
          {cardData.map((card, index) => (
              <Card
                detailData={detailData}
                key={index.toString()}
                isSelected={card.id === selectedCardID}
                onClick={() => selectCard(card.id)}
                onDismiss={() => selectCard(null)}
                {...card}
              />
          ))}
        </div>
      </div>
    </div>
  )
}


