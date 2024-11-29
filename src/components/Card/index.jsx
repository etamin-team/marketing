import Title from "../Generics/Title";
import Subtitle from "../Generics/Subtitle";
import { Container, IconWrapper, StyledButton, TextWrapper } from "./style";

const Card = ({ date }) => {
  const { title, description, icon } = date;
  console.log(icon);
  return (
    <Container>
      <IconWrapper size={"78px"}>
        <img src={icon || ""} alt={title || ""} />
      </IconWrapper>
      <Title size={24} color="var(--primaryColor)">
        {title || "Title"}
      </Title>
      <Subtitle>{description || "Description"}</Subtitle>
      <StyledButton>
        <TextWrapper>
          <Subtitle color={"var(--primaryColor)"}>Read More</Subtitle>
          <IconWrapper>
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
              alt="Arrow Icon"
            />
          </IconWrapper>
        </TextWrapper>
      </StyledButton>
    </Container>
  );
};

export default Card;
