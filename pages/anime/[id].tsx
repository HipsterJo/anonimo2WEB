import React from "react";
import ReactPlayer from "react-player";
import Col from "../../components/GridHorizontalCard/Col";
import animes from "../../public/animes.json";
import CardAnimeId from "../../components/CardAnimeId";

const AnimePage = () => {
  return (
    <div>
      <div className="grid grid-cols-6 grid-row-3 gap-10 grid-rows-1 px-2">
        <div className="col-span-1 row-span-1 bg-black  h-[500px] "></div>
        <div className="col-span-3 row-span-1">
          <ReactPlayer width="100%" url="https://youtu.be/6HQ8egjDEio" />
        </div>
        <div className="col-span-2 row-span-2">
          <Col type="top" />
        </div>
        <div className="col-span-4 row-span-1">
            <CardAnimeId anime={animes[0]} className=""/>
        </div>
      </div>
    </div>
  );
};

export default AnimePage;
