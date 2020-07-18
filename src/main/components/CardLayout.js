import styled, {keyframes} from "styled-components";
import {motion} from "framer-motion";

export default function CardLayout({item}) {
  return (
    <Layout className="mobile:w-full tablet:w-full laptop:max-w-xs desktop:max-w-xs  rounded-lg overflow-hidden shadow-lg">
      <img className="w-full " src={item?.image} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.title}</div>
          <p className="text-gray-700 text-base overflow-hidden whitespace-normal" style={{height: 50, textOverflow: "ellipsis", "-webkit-line-clamp": 2, "-webkit-box-orient": "vertical", wordWrap: "break-word", display: "-webkit-box"}}>
            {item.short}
          </p>
        </div>
        <div className="px-6 py-4">
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
    </Layout>
  )
}

const slideUp = keyframes`
  from {
    transform: translateY(0);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px 10px;
  }

  to {
    transform: translateY(-15px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 12px 10px;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-15px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 12px 10px;
  }

  to {
    transform: translateY(0);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px 10px;
  }
`;

const Layout = styled.div`
  position: relative;
  animation: ${slideDown} 0.5s ease;
  &:hover {
    animation: ${slideUp} 0.5s ease;
    -webkit-animation-fill-mode: forwards;    
  }
`;
