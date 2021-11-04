import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import "./NFTPortal.css";
import egg1 from "assets/images/egg1.gif";
import egg2 from "assets/images/egg2.gif";
import egg3 from "assets/images/egg3.gif";
import egg4 from "assets/images/egg4.gif";
import egg5 from "assets/images/egg5.gif";
import egg6 from "assets/images/egg6.gif";
import egg7 from "assets/images/egg7.gif";
import egg8 from "assets/images/egg8.gif";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { EffectCube } from "swiper";
import planet1 from "assets/images/planet1.jpeg";
import planet2 from "assets/images/planet2.jpeg";
import planet3 from "assets/images/planet3.jpeg";

SwiperCore.use([EffectCube]);

function NFTPortal() {
  return (
    <div>
      <Navbar navbarHeader={false} navbarLinks={false} />
      <div className="nft-portal">
        <div className="nft-portal-left">
          <p className="fs-16px yellow weight-6 mb-10px">NFT Portal</p>
          <p className="fs-34px dark-blue weight-6 mb-25px">
            Floki Diamond-Hands NFT Portal
          </p>
          <p className="gray weight-6 fs-19px mb-30px">
            The Floki Inu team is pleased to reward all Diamond-Hands FLOKI
            holders with these official Floki Inu NFTs. The community’s
            Diamond-Hands have contributed significantly to the project’s
            success, and this NFT is a token of our recognition!
          </p>
          <p className="gray weight-6 fs-19px mb-30px">
            If your ETH address is eligible for the NFT reward according to the
            Floki Inu V2 Diamond-Hands guidelines, you will be able to claim the
            reward. <Link className="purple">Read Guidelines</Link>
          </p>
        </div>
        <div className="nft-portal-right">
          <img src="https://theflokiinu.com/images/claim.png" alt="" />
        </div>
      </div>

      <div className="wrapper egg-gallery-wrapper">
        <p className="yellow text-center weight-8 fs-16px mb-10px">Eggs</p>
        <p className="dark-blue text-center weight-8 fs-34px mb-20px">
          Don't Break Them
        </p>
        <p className="gray text-center weight-8 fs-19px mb-50px">
          Keep's Your Hen and Eggs save
        </p>

        <div className=" egg-gallery">
          <img src={egg1} alt="" />
          <img src={egg2} alt="" />
          <img src={egg3} alt="" />
          <img src={egg4} alt="" />
          <img src={egg5} alt="" />
          <img src={egg6} alt="" />
          <img src={egg7} alt="" />
          <img src={egg8} alt="" />
        </div>
      </div>

      {/* cube */}
      <div className="wrapper cube-gallery-wrapper">
        <p className="yellow text-center weight-8 fs-16px mb-10px">Cube</p>
        <p className="dark-blue text-center weight-8 fs-34px mb-20px">
          Play with it
        </p>
        <p className="gray text-center weight-8 fs-19px mb-50px">
          Keep's Your Hen and Eggs save
        </p>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          className="cube-gallery"
        >
          <SwiperSlide>
            <img src={planet1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={planet2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={planet3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={planet1} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default NFTPortal;
