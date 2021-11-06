import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import "./NFTPortal.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { EffectCube, Autoplay } from "swiper";
import unnamed1 from "assets/images/unnamed-1.jpg";
import unnamed2 from "assets/images/unnamed-2.jpg";
import unnamed3 from "assets/images/unnamed-3.jpg";

import moon from "assets/images/astronaut_moon.webp";
import dragon from "assets/images/dragon.gif";
import house_night from "assets/images/house_night.webp";
import pad from "assets/images/pad.webp";
import starstation from "assets/images/starstation.webp";
import unnamed5 from "assets/images/unnamed5.png";

SwiperCore.use([EffectCube, Autoplay]);

function NFTPortal() {
  return (
    <div>
      <Navbar navbarHeader={false} navbarLinks={false} />
      {/* <div className="nft-portal">
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
      </div> */}

      {/* cube */}
      <div
        className=" cube-gallery-wrapper bg-light-orange"
        style={{ paddingTop: 50 }}
      >
        <p className="yellow text-center weight-8 fs-16px mb-10px">Cube</p>
        <p className="dark-blue text-center weight-8 fs-34px mb-20px">
          Play with it
        </p>
        <p className="gray text-center weight-8 fs-19px mb-50px">
          Keep's Your Hen and Eggs save
        </p>

        <div className="section   wrapper ">
          <div className="section-left">
            <p className="fs-36px dark-blue weight-8 mb-40px">
              the community-owned crypto inspired by Elon Musk!
            </p>
            <p className="gray weight-6 fs-20px mb-20px">
              A new crypto coin birthed by fans & members of the Shiba Inu
              community, Floki Inu (FLOKI) is inspired by #DogeFather Elon
              Musk’s very own Shiba Inu.
            </p>
            <p className="gray weight-6 fs-20px mb-30px">
              FLOKI is working on three flagship utility projects: an NFT gaming
              metaverse known as Valhalla, an NFT and merchandise marketplace
              known as FlokiPlaces, and a content/education platform known as
              Floki Inuversity.
            </p>
          </div>
          <div className="section-right">
            <Swiper
              effect={"cube"}
              grabCursor={true}
              loop={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              className="cube-gallery"
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <img src={unnamed1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={unnamed2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={unnamed3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={unnamed1} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="wrapper egg-gallery-wrapper ">
        <p className="yellow text-center weight-8 fs-16px mb-10px">Eggs</p>
        <p className="dark-blue text-center weight-8 fs-34px mb-20px">
          Don't Break Them
        </p>
        <p className="gray text-center weight-8 fs-19px mb-50px">
          Keep's Your Hen and Eggs save
        </p>

        <div className="egg-gallery column-3">
          <img src={moon} alt="" />
          <img src={dragon} alt="" />
          <img src={house_night} alt="" />
          <img src={pad} alt="" />
          <img src={starstation} alt="" />
          <img src={unnamed5} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NFTPortal;
