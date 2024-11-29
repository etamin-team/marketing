import videoBg from "../../assets/vidoes/background.mp4";
import SubTitle from "../Generics/Subtitle";
import Button from "../Generics/Button";
import image from "../../assets/icons/wave.svg";
import {
  BackgroundImage,
  CardContainer,
  Container,
  GreyWrap,
  MarketingWrap,
  TitleStyle,
  VideoBackground,
} from "./style";
import Card from "../Card";
import cardInfo from "../../utils/cardInfo";

const Home = () => {
  return (
    <Container>
      <VideoBackground>
        <video src={videoBg} autoPlay loop muted playsInline></video>
      </VideoBackground>
      <GreyWrap></GreyWrap>
      <BackgroundImage>
        <img src={image} alt="No image" />
      </BackgroundImage>
      <MarketingWrap>
        <TitleStyle>
          Right Social Networking
          <br /> for Marketing
        </TitleStyle>
        <SubTitle color="white">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
          dolore magna aliqua quis nostrud exerc.
        </SubTitle>
        <Button bgcolor={"#8f6dff"} color="white" padding={"15px 45px"}>
          Discover Now
        </Button>
      </MarketingWrap>
      <CardContainer>
        {cardInfo.map((v, i) => {
          return (
            <Card key={i} date={v} br={cardInfo.length - 1 != i ? 1 : 0} />
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default Home;
