import FooterIcon from "components/FooterIcon/FooterIcon";
import Tooltip from "components/Tooltip/Tooltip";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p
        className="dark-blue fs-32px mb-30px weight-9"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        Join the Floki Inu community and let's ride to Valhalla.
      </p>
      <div className="pointer purple-bg-hover button-wrapper bg-purple fs-17px radius-4px white weight-9 w-fit mb-50px ">
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
  );
}

export default Footer;
