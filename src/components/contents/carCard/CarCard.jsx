import React from "react";
import { Block, Text, Link } from "vcc-ui";
import cardStyle from "./CarCard.module.scss";
import { useRouter } from "next/router";

const CarCard = ({ id, modelName, modelType, bodyType, imageUrl }) => {
  const router = useRouter();

  // function to handle shop and learn routes
  const handleShopClick = () => {
    router.push(`/shop/${id}`);
  };
  const handleLearnClick = () => {
    router.push(`/learn/${id}`);
  };

  return (
    <div className={cardStyle.cardContent}>
      <Text
        subStyle="inline-link"
        extend={{ textTransform: "uppercase", fontWeight: "bold" }}
      >
        {bodyType}
      </Text>
      <Block>
        <Text variant="hillary" subStyle="emphasis">
          {modelName} <Text subStyle="inline-link">{modelType}</Text>
        </Text>
      </Block>

      <div key={id}>
        <img
          src={imageUrl}
          alt={`${modelName} ${modelType}`}
          className={cardStyle.carImg}
        />
      </div>
      <Block
        extend={{
          padding: 10,
          display: "flex",
          gap: 20,
          justifyContent: "center",
        }}
      >
        {/* Link to Shop and Learn routes, Link component from vcc-ui */}
        <Link onClick={handleLearnClick}  arrow="right">
          LEARN
        </Link>
        <Link onClick={handleShopClick} arrow="right">
          SHOP
        </Link>
      </Block>
    </div>
  );
};

export default CarCard;
