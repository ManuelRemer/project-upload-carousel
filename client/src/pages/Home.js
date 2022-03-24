// styles
import "./Home.css";
// components
import { Navigation, Carousel, CarouselItem } from "../components";

const Home = () => {
  return (
    <div>
      <Carousel>
        <CarouselItem>purple</CarouselItem>
        <CarouselItem>blue</CarouselItem>
        <CarouselItem>olive</CarouselItem>
      </Carousel>
    </div>
  );
};

export default Home;
