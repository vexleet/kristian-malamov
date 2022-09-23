import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const scrollKeyframe = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
`;

const Mouse = styled.div`
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
`;

const Scroller = styled.div`
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #fff;
  animation-name: ${scrollKeyframe};
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
`;

const ScrollDownMouse = () => {
  return (
    <Mouse>
      <Scroller />
    </Mouse>
  );
};

export default ScrollDownMouse;
