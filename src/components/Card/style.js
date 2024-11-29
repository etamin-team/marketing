import { title } from "framer-motion/client";
import styled from "styled-components";
import getValue from "../../hooks/getStyleValue";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

// const CardWrapper = styled.div`
//   background: #ffffff;
//   border-radius: 15px;
//   padding: 20px;
//   width: 300px;
//   text-align: center;
//   transition: all 0.3s ease;

//   &:hover {
//     box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
//   }
// `;

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const StyledButton = styled.button`
  background-color: #6e8efb;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 15px 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #557ad6;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: ${({ size }) => console.log(size) || getValue(size, "18px")};
    height: ${({ size }) => getValue(size, "18px")};
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export { Container, CardContainer, StyledButton, IconWrapper, TextWrapper };
