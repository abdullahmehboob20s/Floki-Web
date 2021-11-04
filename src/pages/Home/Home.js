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
import SwiperCore, { EffectCube } from "swiper";
import planet1 from "assets/images/planet1.jpeg";
import planet2 from "assets/images/planet2.jpeg";
import planet3 from "assets/images/planet3.jpeg";

SwiperCore.use([EffectCube]);

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

          <button className="pointer py-15px px-24px bg-light-red red radius-4px border-none outline-none fs-16px weight-9 mb-30px">
            Please set slippage to 4% for Uniswap & PancakeSwap
          </button>

          <div className="hero-btns">
            <button className="border-none outline-none bg-yellow radius-4px fs-17px dark-yellow weight-8">
              Buy on PancakeSwap
            </button>
            <button className="border-none outline-none bg-purple radius-4px fs-17px white weight-8">
              Buy on Uniswap
            </button>
          </div>
        </div>
        <div className="section-right">
          <img
            src="https://external-preview.redd.it/nKqNnVC_In31I0DC9PH-hG9KxxITeZ3OyFVbs9S-BkY.jpg?width=640&crop=smart&auto=webp&s=2450c030beb58fe047ca16f1d019c1bb13b2839b"
            alt=""
          />
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

      <div className="wrapper buy-floki  bg-light-orange mb-100px">
        <div className="buy-left">
          <img
            className="how-to-img"
            src="https://theflokiinu.com/images/how-to.png"
            alt=""
          />
          <div className="buy-left-youtube-btns">
            <Link className="youtube-btns">
              <img src="https://theflokiinu.com/images/youtube.svg" alt="" />{" "}
              <p>Watch How To Buy Floki (ETH)</p>
            </Link>
            <Link className="youtube-btns">
              <img src="https://theflokiinu.com/images/youtube.svg" alt="" />{" "}
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
            <button className="border-none outline-none bg-yellow radius-4px fs-17px dark-yellow weight-8">
              Buy on PancakeSwap
            </button>
            <button className="border-none outline-none bg-purple radius-4px fs-17px white weight-8">
              Buy on Uniswap
            </button>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="hold mb-100px">
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
            <img
              src="https://theflokiinu.com/images/poe.png"
              alt=""
              className="hold-tweet img"
            />
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

      <div className="wrapper">
        <div className="audit">
          <div className="audit-left px-48px">
            <p className="yellow weight-9 fs-16px mb-10px">AUDIT</p>
            <p className="dark-blue weight-6 fs-34px mb-25px">Audit Report</p>
            <p className="gray  weight-6 fs-19px mb-50px">
              The token has been certified as fully safe by Solidity.
            </p>
            <button className="border-none outline-none bg-yellow radius-4px fs-17px dark-yellow weight-8 button-wrapper mb-15px">
              Binance Smart Chain
            </button>{" "}
            <br />
            <button className="border-none outline-none bg-purple radius-4px fs-17px white weight-8 button-wrapper">
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
        <div className="button-wrapper bg-purple fs-26px radius-4px white weight-9 w-fit mx-auto">
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
              <Accordion title="How did the Floki token come into existence?" />
              <Accordion title="What exchanges are we listed and what are the plans for future listings?  " />
              <Accordion title="Why was Floki V2 launched?" />
            </div>
            <div className="faq-accordions">
              <Accordion title="How can I buy Floki?" />
              <Accordion title="Does Floki Inu have plans for marketing and getting influencers on board? Do you have funds for this?" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper secondary-bg">
        <div className="footer">
          <p
            className="dark-blue fs-32px mb-30px weight-9"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            Join the Floki Inu community and let's ride to Valhalla.
          </p>
          <div className="pointer button-wrapper bg-purple fs-17px radius-4px white weight-9 w-fit mb-50px ">
            Join Our Telegram
          </div>

          <div className="footer-details">
            <div className="footer-details-left">
              <div className="text-color mb-20px weight-6">
                <p>ETHEREUM contract address:</p>
                <p className="mb-20px">
                  0x43F11C02439E2736800433B4594994BD43CD066D
                </p>
                <p>BINANCE SMART CHAIN contract address:</p>
                <p>0x2B3F34E9D4B127797CE6244EA341A83733DDD6E4</p>
              </div>
            </div>
            <div className="footer-details-right">
              <Tooltip title="Twitter">
                <FooterIcon icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGcgZGF0YS1uYW1lPSJ0d2l0dGVyIGNpcmNsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNi40NDQgLTIuMjgxKSI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiMyZGFhZTEiIGRhdGEtbmFtZT0iRWxsaXBzZSAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjYuNDQ0IDIuMjgxKSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yOTcuNDQxLDE0OS42N2EyNi41MzgsMjYuNTM4LDAsMCwxLTcuNywyLjEzMywxMy41NTgsMTMuNTU4LDAsMCwwLDUuODkzLTcuNDkyLDI2LjYsMjYuNiwwLDAsMS04LjUxMiwzLjI4NywxMy4zMTYsMTMuMzE2LDAsMCwwLTkuNzgyLTQuMjc1LDEzLjQ3MSwxMy40NzEsMCwwLDAtMTMuNCwxMy41NDMsMTMuODM3LDEzLjgzNywwLDAsMCwuMzQ1LDMuMDg3LDM3LjkyMSwzNy45MjEsMCwwLDEtMjcuNjIyLTE0LjE1LDEzLjY1MSwxMy42NTEsMCwwLDAsNC4xNDcsMTguMDgsMTMuMjM0LDEzLjIzNCwwLDAsMS02LjA3MS0xLjY5M3YuMTcxYTEzLjUxNCwxMy41MTQsMCwwLDAsMTAuNzUsMTMuMjc4LDEzLjIsMTMuMiwwLDAsMS0zLjUzMS40NzUsMTMuNDYyLDEzLjQ2MiwwLDAsMS0yLjUyMy0uMjM4LDEzLjQzNiwxMy40MzYsMCwwLDAsMTIuNTE3LDkuNCwyNi43NTMsMjYuNzUzLDAsMCwxLTE5Ljg0MSw1LjYwNiwzNy42MzcsMzcuNjM3LDAsMCwwLDIwLjU0Miw2LjA4N2MyNC42NDgsMCwzOC4xMjktMjAuNjM2LDM4LjEyOS0zOC41MzJxMC0uODgxLS4wNDEtMS43NTJhMjcuNDY3LDI3LjQ2NywwLDAsMCw2LjctNy4wMloiIGRhdGEtbmFtZT0iUGF0aCAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODguMjMyIC0xMTcuNzY1KSIvPjwvZz48L3N2Zz4=" />
              </Tooltip>
              <Tooltip title="Telegram">
                <FooterIcon icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMjQwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIuNjY3IiB4Mj0iLjQxNyIgeTE9Ii4xNjciIHkyPSIuNzUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzM3YWVlMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFlOTZjOCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iLjY2IiB4Mj0iLjg1MSIgeTE9Ii40MzciIHkyPSIuODAyIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlZmY3ZmMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSIxMjAiIGN5PSIxMjAiIHI9IjEyMCIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGZpbGw9IiNjOGRhZWEiIGQ9Ik05OCAxNzVjLTMuODg4IDAtMy4yMjctMS40NjgtNC41NjgtNS4xN0w4MiAxMzIuMjA3IDE3MCA4MCIvPjxwYXRoIGZpbGw9IiNhOWM5ZGQiIGQ9Ik05OCAxNzVjMyAwIDQuMzI1LTEuMzcyIDYtM2wxNi0xNS41NTgtMTkuOTU4LTEyLjAzNSIvPjxwYXRoIGZpbGw9InVybCgjYikiIGQ9Ik0xMDAuMDQgMTQ0LjQxbDQ4LjM2IDM1LjcyOWM1LjUxOSAzLjA0NSA5LjUwMSAxLjQ2OCAxMC44NzYtNS4xMjNsMTkuNjg1LTkyLjc2M2MyLjAxNS04LjA4LTMuMDgtMTEuNzQ2LTguMzYtOS4zNDlsLTExNS41OSA0NC41NzFjLTcuODkgMy4xNjUtNy44NDMgNy41NjctMS40MzggOS41MjhsMjkuNjYzIDkuMjU5IDY4LjY3My00My4zMjVjMy4yNDItMS45NjYgNi4yMTgtLjkxIDMuNzc2IDEuMjU4Ii8+PC9zdmc+" />
              </Tooltip>
              <Tooltip title="Discord">
                <FooterIcon icon="https://theflokiinu.com/_nuxt/img/discord.c4a6e12.svg" />
              </Tooltip>
              <Tooltip title="Medium">
                <FooterIcon icon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAwYy02LjYyNiAwLTEyIDUuMzcyLTEyIDEyIDAgNi42MjcgNS4zNzQgMTIgMTIgMTIgNi42MjcgMCAxMi01LjM3MyAxMi0xMiAwLTYuNjI4LTUuMzczLTEyLTEyLTEyem02Ljk3NCAxNy41NTd2LS4yMzVsLTEuMDkyLTEuMDcyYy0uMDk2LS4wNzMtLjE0NC0uMTk0LS4xMjQtLjMxM3YtNy44NzRjLS4wMi0uMTE5LjAyOC0uMjQuMTI0LS4zMTNsMS4xMTgtMS4wNzJ2LS4yMzVoLTMuODY5bC0yLjc1OCA2Ljg4LTMuMTM4LTYuODhoLTQuMDU5di4yMzVsMS4zMDggMS41NzVjLjEyOC4xMTUuMTk0LjI4NS4xNzYuNDU3djYuMTg4Yy4wMzguMjIzLS4wMzIuNDUxLS4xODkuNjE0bC0xLjQ3MSAxLjc4NHYuMjM1aDQuMTd2LS4yMzVsLTEuNDcxLTEuNzg0Yy0uMTU4LS4xNjMtLjIzMy0uMzg5LS4yMDItLjYxNHYtNS4zNTJsMy42NiA3Ljk4NWguNDI1bDMuMTQzLTcuOTg1djYuMzY1YzAgLjE3IDAgLjIwMi0uMTExLjMxM2wtMS4xMyAxLjA5OHYuMjM1aDUuNDl6Ii8+PC9zdmc+Cg==" />
              </Tooltip>
              <Tooltip title="Reddit">
                <FooterIcon icon="https://theflokiinu.com/_nuxt/img/reddit.b1c2c5b.svg" />
              </Tooltip>
              <Tooltip title="Instagram">
                <FooterIcon icon="https://theflokiinu.com/_nuxt/img/instagram-sm.217117b.svg" />
              </Tooltip>
              <Tooltip title="Etherscan">
                <FooterIcon icon="https://theflokiinu.com/_nuxt/img/uni-sm.c8f9930.svg" />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
