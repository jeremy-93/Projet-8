import React from "react";
import ImageBanner from "../components/ImageBanner";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="imagebannerHome">
        <ImageBanner imageUrl="./Bannerimg.png" showTitle={true} />
      </div>
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
