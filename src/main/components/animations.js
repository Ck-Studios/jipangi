import styled, {keyframes} from "styled-components";

export const slideUp = keyframes`
  from {
    transform: translateY(0);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px 10px;
  }

  to {
    transform: translateY(-15px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 12px 10px;
  }
`;

export const slideDown = keyframes`
  from {
    transform: translateY(-15px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 12px 10px;
  }

  to {
    transform: translateY(0);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px 10px;
  }
`;

export const HoverImage = styled.img`
  position: relative;
  animation: ${slideDown} 0.5s ease;
  background: transparent;
  &:hover {
    animation: ${slideUp} 0.5s ease;
    -webkit-animation-fill-mode: forwards;    
  }
`;

export const Layout = styled.div`
  position: relative;
  animation: ${slideDown} 0.5s ease;
  background: transparent;
  &:hover {
    animation: ${slideUp} 0.5s ease;
    -webkit-animation-fill-mode: forwards;    
  }
`;
