// styles
import "./Home.css";
// components
import { Carousel, CarouselItem } from "../components";
// images
import c1 from "../images/computer-1.jpeg";
import c2 from "../images/computer-2.jpeg";
import c3 from "../images/computer-3.jpeg";
import c5 from "../images/computer-5.jpeg";
import c6 from "../images/computer-6.jpeg";

const Home = () => {
  return (
    <div>
      <Carousel itemsShown={1}>
        <CarouselItem>
          <img src={c1} alt="any computer" />
        </CarouselItem>
        <CarouselItem>
          <img src={c6} alt="any computer" />
        </CarouselItem>
        <CarouselItem>
          <img src={c2} alt="any computer" />
        </CarouselItem>
        <CarouselItem>
          <img src={c5} alt="any computer" />
        </CarouselItem>
        <CarouselItem>
          <img src={c3} alt="any computer" />
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default Home;
