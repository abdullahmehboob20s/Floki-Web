import React from "react";
import "./Home.css";
import Navbar from "layouts/Navbar/Navbar";
import { Link } from "react-router-dom";
import MoonsheetPhase from "components/MoonsheetPhase/MoonsheetPhase";
import TeamCard from "components/TeamCard/TeamCard";
import Accordion from "components/Accordion/Accordion";
import FooterIcon from "components/FooterIcon/FooterIcon";
import Tooltip from "components/Tooltip/Tooltip";
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
import SwiperCore, { EffectCube, Autoplay } from "swiper";
import planet1 from "assets/images/planet1.jpeg";
import planet2 from "assets/images/planet2.jpeg";
import planet3 from "assets/images/planet3.jpeg";
import Footer from "layouts/Footer/Footer";
import hiImg from "assets/images/hi-img.png";
import rocketImg from "assets/images/rocket.png";
import catImg from "assets/images/cat.png";

SwiperCore.use([EffectCube, Autoplay]);

function Home() {
  let phases = [
    {
      isDone: true,
      type: "Phase 1",
      tasks: [
        { type: "Token relaunch", isTaskDone: true },
        { type: "BSC launch", isTaskDone: true },
        { type: "Smart contract audits", isTaskDone: true },
        { type: "CMC / Coingecko listings", isTaskDone: true },
        { type: "Cross-chain bridge/swaps", isTaskDone: true },
        { type: "Influencer / Celebrity onboarding", isTaskDone: true },
        { type: "Website relaunch", isTaskDone: true },
        { type: "25,000 holders", isTaskDone: true },
      ],
    },
    {
      isDone: false,
      type: "Phase 2",
      tasks: [
        { type: "50,000 holders", isTaskDone: true },
        { type: "Aggressive marketing rollout", isTaskDone: true },
        { type: "Charity donations", isTaskDone: true },
        { type: "Solid partnerships (with utility focus)", isTaskDone: true },
        { type: "User rewards program", isTaskDone: false },
      ],
    },
    {
      isDone: false,
      type: "Phase 3",
      tasks: [
        { type: "Dapps / Games", isTaskDone: false },
        { type: "CEX listings", isTaskDone: false },
        { type: "Major partnerships", isTaskDone: false },
        { type: "100,000 holders", isTaskDone: false },
        { type: "Real world events", isTaskDone: false },
      ],
    },
    {
      isDone: false,
      type: "Phase 4",
      tasks: [
        {
          type: "FlokiPlaces (NFT / Merchandise marketplace)",
          isTaskDone: false,
        },
        { type: "Tesla giveaway", isTaskDone: false },
        {
          type: "Massive donation to dog shelters/charities ($100k+)",
          isTaskDone: false,
        },
        { type: "150,000 holders", isTaskDone: false },
      ],
    },
  ];
  return (
    <div>
      <Navbar />

      <div className="section wrapper ">
        <div className="section-left">
          <p className="fs-36px dark-blue weight-8 mb-40px">
            Meet Floki Inu, the community-owned crypto inspired by Elon Musk!
          </p>
          <p className="gray weight-6 fs-20px mb-20px">
            A new crypto coin birthed by fans & members of the Shiba Inu
            community, Floki Inu (FLOKI) is inspired by #DogeFather Elon Musk’s
            very own Shiba Inu.
          </p>
          <p className="gray weight-6 fs-20px mb-30px">
            FLOKI is working on three flagship utility projects: an NFT gaming
            metaverse known as Valhalla, an NFT and merchandise marketplace
            known as FlokiPlaces, and a content/education platform known as
            Floki Inuversity.
          </p>

          <button className=" py-15px px-24px bg-light-red red radius-4px border-none outline-none fs-16px weight-9 mb-30px">
            Please set slippage to 4% for Uniswap & PancakeSwap
          </button>

          <div className="hero-btns">
            <button className="pointer border-none outline-none bg-yellow radius-4px fs-17px dark-yellow weight-8 yellow-bg-hover">
              Buy on PancakeSwap
            </button>
            <button className="pointer purple-bg-hover border-none outline-none bg-purple radius-4px fs-17px white weight-8">
              Buy on Uniswap
            </button>
          </div>
        </div>
        <div className="section-right">
          <div className="hold-tweet-wrapper">
            <img src={catImg} alt="" className="hold-tweet img" />
            <iframe
              id="twitter-widget-0"
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
              class=""
              style={{
                position: "static",
                visibility: "visible",
                width: "420px",
                height: "455px",
                display: "block",
                flexGrow: 1,
              }}
              title="Twitter Tweet"
              src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdHdlZXRfZW1iZWRfOTU1NSI6eyJidWNrZXQiOiJodGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3NwYWNlX2NhcmQiOnsiYnVja2V0Ijoib2ZmIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1437179881260032016&amp;lang=en&amp;origin=https%3A%2F%2Ftheflokiinu.com%2F&amp;sessionId=5e30ebd0a5aca3da9bef9c3cf01cb3e2ff9ce327&amp;theme=light&amp;widgetsVersion=f001879%3A1634581029404&amp;width=550px"
              data-tweet-id="1437179881260032016"
            ></iframe>
          </div>
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
          loop={true}
          grabCursor={true}
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

      <div className="wrapper buy-floki  bg-light-orange mb-100px">
        <div className="buy-left">
          <img className="how-to-img" src={rocketImg} alt="" />
          <div className="buy-left-youtube-btns">
            <Link className="youtube-btns">
              <p>Watch How To Buy Floki (ETH)</p>
            </Link>
            <Link className="youtube-btns">
              <p>Watch How To Buy Floki (BSC)</p>
            </Link>
          </div>
        </div>
        <div className="buy-right">
          <p className="fs-16px yellow weight-6 mb-10px">BUY</p>
          <p className="fs-34px dark-blue weight-6 mb-30px">How To Buy Floki</p>
          <p className="gray weight-6 fs-19px mb-30px">
            Buying $FLOKI is easy. We've created this YouTube tutorial to show
            you how to buy $FLOKI from start to finish.
          </p>
          <p className="gray weight-6 fs-19px mb-30px">
            You can buy Floki Inu on both PancakeSwap and Uniswap.
          </p>
          <div className="w-fit bg-none red fs-16px weight-9 mb-30px border-b-red">
            Please set slippage to 4% for Uniswap & PancakeSwap
          </div>
          <div className="hero-btns">
            <button className="pointer yellow-bg-hover border-none outline-none bg-yellow radius-4px fs-17px dark-yellow weight-8">
              Buy on PancakeSwap
            </button>
            <button className="pointer purple-bg-hover border-none outline-none bg-purple radius-4px fs-17px white weight-8">
              Buy on Uniswap
            </button>
          </div>
        </div>
      </div>

      <div className="section wrapper ">
        <div className="section-left">
          <p className="fs-36px dark-blue weight-8 mb-40px">
            Meet Floki Inu, the community-owned crypto inspired by Elon Musk!
          </p>
          <p className="gray weight-6 fs-20px mb-20px">
            A new crypto coin birthed by fans & members of the Shiba Inu
            community, Floki Inu (FLOKI) is inspired by #DogeFather Elon Musk’s
            very own Shiba Inu.
          </p>
          <p className="gray weight-6 fs-20px mb-30px">
            FLOKI is working on three flagship utility projects: an NFT gaming
            metaverse known as Valhalla, an NFT and merchandise marketplace
            known as FlokiPlaces, and a content/education platform known as
            Floki Inuversity.
          </p>
        </div>
        <div className="section-right">
          <img src={hiImg} alt="" />
        </div>
      </div>

      {/* <div className="wrapper">
        <div className="hold ">
          <p className="yellow text-center weight-8 fs-16px mb-10px">
            HOLD FLOKI
          </p>
          <p className="dark-blue text-center weight-8 fs-34px mb-25px">
            Store of Value
          </p>
          <p className="gray text-center weight-8 fs-19px hold-last-title">
            Deflationary, not inflationary
          </p>

          <div className="hold-tweet-wrapper">
            <img src={catImg} alt="" className="hold-tweet img" />
            <iframe
              id="twitter-widget-0"
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
              class=""
              style={{
                position: "static",
                visibility: "visible",
                width: "420px",
                height: "455px",
                display: "block",
                flexGrow: 1,
              }}
              title="Twitter Tweet"
              src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdHdlZXRfZW1iZWRfOTU1NSI6eyJidWNrZXQiOiJodGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3NwYWNlX2NhcmQiOnsiYnVja2V0Ijoib2ZmIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1437179881260032016&amp;lang=en&amp;origin=https%3A%2F%2Ftheflokiinu.com%2F&amp;sessionId=5e30ebd0a5aca3da9bef9c3cf01cb3e2ff9ce327&amp;theme=light&amp;widgetsVersion=f001879%3A1634581029404&amp;width=550px"
              data-tweet-id="1437179881260032016"
            ></iframe>
          </div>
        </div>
      </div> */}

      <div className="wrapper">
        <div className="audit">
          <div className="audit-left px-48px">
            <p className="yellow weight-9 fs-16px mb-10px">AUDIT</p>
            <p className="dark-blue weight-6 fs-34px mb-25px">Audit Report</p>
            <p className="gray  weight-6 fs-19px mb-50px">
              The token has been certified as fully safe by Solidity.
            </p>
            <button className="pointer yellow-bg-hover border-none outline-none bg-yellow radius-4px fs-17px dark-yellow weight-8 button-wrapper mb-15px">
              Binance Smart Chain
            </button>{" "}
            <br />
            <button className="pointer purple-bg-hover border-none outline-none bg-purple radius-4px fs-17px white weight-8 button-wrapper">
              Ethereum Block Chain
            </button>
          </div>
          <div className="audit-right p-12px">
            <p className="gray weight-5 fs-19px mb-25px">
              “The Floki Inu contract has been audited by Solidity and passed
              with flying colours. The new contract was designed by
              @themoontography.
            </p>
            <p className="gray weight-5 fs-19px mb-20px">
              The new contract is FULLY SAFE as Certified by Solidity!”
            </p>

            <div className="audit-finance p-12px">
              <img
                className="audit-finance-icon"
                src="https://theflokiinu.com/images/solidity.png"
                alt=""
              />
              <div>
                <p className="gray weight-9 fs-19px mb-5px">Solidity Finance</p>
                <p className="gray weight-6 fs-16px ">
                  Smart Contract Auditing Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* moonsheet */}
      <div className="moonsheet-wrapper wrapper bg-light-blue mb-100px">
        <p className="yellow weight-9 fs-16px mb-10px text-center">ROADMAP</p>
        <p className="dark-blue weight-6 fs-34px mb-25px text-center">
          Moonsheet
        </p>
        <p className="gray  weight-6 fs-19px mb-50px text-center">
          Here is our moonsheet showing our current progress and future plans
          for development and utility of the FLOKI token.
        </p>

        <div className="moonsheet-phases">
          {phases.map((data, i) => (
            <MoonsheetPhase data={data} phaseIndex={i + 1} />
          ))}
        </div>
      </div>

      <div className="TEAM-wrapper wrapper">
        <p className="yellow weight-9 fs-16px mb-10px text-center">TEAM</p>
        <p className="dark-blue weight-6 fs-34px mb-25px text-center">
          Floki Inu Space Crew
        </p>
        <p className="gray  weight-6 fs-19px mb-100px text-center">
          Floki Inu has a top team of space engineers and crypto influencers
          working hard to send this puppy to space. All supported by the loving
          Floki Inu community.
        </p>

        <div className="team-cards mb-100px">
          <TeamCard
            title="Floki Inu"
            subtitle="Hero"
            img="https://theflokiinu.com/images/floki.png"
          />
          <TeamCard
            title="The Floki Vikings"
            subtitle="Community"
            img="https://theflokiinu.com/images/vikings.png"
          />
          <TeamCard
            title="Floki Inu"
            subtitle="Hero"
            img="https://theflokiinu.com/images/floki.png"
          />
          <TeamCard
            title="The Floki Vikings"
            subtitle="Community"
            img="https://theflokiinu.com/images/vikings.png"
          />
          <TeamCard
            title="Floki Inu"
            subtitle="Hero"
            img="https://theflokiinu.com/images/floki.png"
          />
          <TeamCard
            title="The Floki Vikings"
            subtitle="Community"
            img="https://theflokiinu.com/images/vikings.png"
          />
        </div>
        <div className="pointer purple-bg-hover button-wrapper bg-purple fs-26px radius-4px white weight-9 w-fit mx-auto">
          Hall of Fame
        </div>
      </div>

      <div className="wrapper">
        <div className="faq-wrapper">
          <p className="yellow weight-9 fs-16px mb-10px text-center">FAQ</p>
          <p className="dark-blue weight-6 fs-34px mb-25px text-center">
            Frequently Asked Questions
          </p>
          <p className="gray  weight-6 fs-19px mb-50px text-center">
            All you need to know about Floki Inu
          </p>

          <div className="faq-accordions-wrapper">
            <div className="faq-accordions">
              <Accordion title="How can I buy Floki?" />
              <Accordion title="How can I buy Floki?" />
              <Accordion title="How can I buy Floki?" />
            </div>
            <div className="faq-accordions">
              <Accordion title="How can I buy Floki?" />
              <Accordion title="How can I buy Floki?" />
              <Accordion title="How can I buy Floki?" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper secondary-bg">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
