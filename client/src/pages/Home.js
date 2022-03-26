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

const data = [
  { _id: 123, name: "c1", src: { c1 }, color: "white" },
  { _id: 124, name: "c2", src: { c2 }, color: "black" },
  { _id: 125, name: "c3", src: { c3 }, color: "blue" },
];

const Home = () => {
  return (
    <div>
      <Carousel>
        <CarouselItem>
          <img src={c1} alt="any computer" color="white" />
        </CarouselItem>
        <CarouselItem>
          <img src={c6} alt="any computer" color="black" />
        </CarouselItem>
        <CarouselItem>
          <img src={c2} alt="any computer" color="white" />
        </CarouselItem>
        <CarouselItem>
          <img src={c5} alt="any computer" color="blue" />
        </CarouselItem>
        <CarouselItem>
          <img src={c3} alt="any computer" color="black" />
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default Home;
