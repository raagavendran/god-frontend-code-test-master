import React, { useEffect, useState } from "react";
import data from "../../../../public/api/cars.json";
import CarCard from "../carCard/CarCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { TabNav, TabNavItem } from "vcc-ui";

const CarList = () => {
  const [carsList, setCarsList] = useState([]);
  const [active, setActive] = useState("All");
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    setCarsList([...data]);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  useEffect(() => {
    if (active === "All") {
      setFilteredCars([...data]);
    } else {
      setFilteredCars([...data].filter((car) => car.bodyType === active));
    }
  }, [active]);

  return (
    <>
      <TabNav enableLineTransition>
        <TabNavItem
          isActive={active === "All"}
          onClick={() => {
            setActive("All");
          }}
        >
          All
        </TabNavItem>

        {carsList
          .map((car) => car.bodyType)
          .filter((value, index, self) => self.indexOf(value) === index)
          .map((bodyType) => (
            <TabNavItem
              isActive={active === bodyType}
              onClick={() => {
                setActive(bodyType);
              }}
              key={bodyType}
            >
              {bodyType.toUpperCase()}
            </TabNavItem>
          ))}
      </TabNav>

      <Carousel
        responsive={responsive}
        arrows={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        renderButtonGroupOutside={true}
        swipeable={true}
        draggable={true}
        showDots={true}
      >
        {filteredCars.map((car) => (
          <div key={car.id}>
            <CarCard
              id={car.id}
              modelName={car.modelName}
              modelType={car.modelType}
              bodyType={car.bodyType}
              imageUrl={car.imageUrl}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarList;
