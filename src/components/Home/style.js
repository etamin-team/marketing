import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -999;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100vh;
    object-fit: cover;
    z-index: -999;
  }
`;

const GreyWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -5;
`;

const MarketingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  height: 80vh;
  text-align: center;
`;

const TitleStyle = styled.h1`
  font-size: 55px;
  text-align: center;
  color: white;
  font-family: "Monserrat" sans-serif;
`;

const BackgroundImage = styled.div`
  position: absolute;
  bottom: -12px;
  left: 0;
  width: 100%;
  z-index: -1;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em 0;
  background-color: white;
  border-radius: 6px;
`;

const CardContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  color: white;
  text-align: center;
  max-width: 1023px;

  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); // Hoverda shaklni o'zgartirish
`;

const IconWrapper = styled.img`
  font-size: 50px;
  margin-bottom: 20px;
`;

const StyledButton = styled.div`
  position: relative;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: #6e8efb;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0 15px;
  cursor: pointer;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  opacity: 0; // Text initialda ko'rinmas
`;

const ArrowIcon = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
`;

export {
  Container,
  VideoBackground,
  GreyWrap,
  MarketingWrap,
  TitleStyle,
  BackgroundImage,
  CardWrapper,
  CardContainer,
  IconWrapper,
  StyledButton,
  Text,
  ArrowIcon,
  Content,
};
