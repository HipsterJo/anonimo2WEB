import type { NextPage } from "next";
import MainContainer from "../components/MainContainer";
import React from "react";
import Carusel from "../components/Carusel";
import ColHorizontalCard from "../components/GridHorizontalCard/Col";
import CardGrid from "../components/CardGrid/CardGrid";
import GridHorizontalCard from "../components/GridHorizontalCard";

const Home: NextPage = () => {
  const [search, setSearch] = React.useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <MainContainer>
      <Carusel />
      <div className="grid grid-cols-6 px-4  gap-3 mt-4 ">
        <div className="col-span-4 xl:col-span-6 grid grid-cols-6  ">
          <div className="col-span-6">
            <h3>Недавное обновленные</h3>

            <CardGrid
              rows={3}
              type={"all"}
              className={"grid grid-cols-5 gap-10"}
            />
          </div>
        </div>

        <div className="col-span-2 xl:col-span-3">
          <h3>Топ аниме</h3>
          <ColHorizontalCard type="top" />
        </div>

        <div className="col-span-4 grid grid-cols-6 gap-3">
          <GridHorizontalCard className="col-span-2 xl:col-span-3 " />
        </div>
      </div>


    </MainContainer>
  );
};

export default Home;
