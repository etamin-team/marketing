import styled from "styled-components";
import getValue from "../../../hooks/getStyleValue";

const Container = styled.button`
  background-color: ${({ bgcolor }) => bgcolor || ""};
  border: none;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.99;
  }

  &:active {
    transform: translate(1);
  }

  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  color: ${({ color }) => (color ? color : "var(--primaryColor)")};
  font-weight: ${({ fw }) => (fw ? fw : "500")};
  padding: ${({ padding }) => (padding ? padding : "5px")};
  width: fit-content;
  flex-wrap: nowrap;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;

  border-radius: 50%;
  opacity: 0px;
  background-color: #1890ff;
  margin-left: 8px;
  color: white;
`;

export { Container, Counter };
