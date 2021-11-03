import React from "react";
import { Link } from "react-router-dom";
import "./TeamCard.css";

function TeamCard({ img, title, subtitle }) {
  return (
    <div className="team-card">
      <div className="team-card-img-wrapper mb-15px">
        <img src={img} alt="" className="team-card-img" />
      </div>
      <p className="dark-blue fs-19px text-center weight-9">{title}</p>
      <p className="dark-blue fs-16px text-center purple mb-15px">{subtitle}</p>
      <Link className="twitter-icon">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGcgZGF0YS1uYW1lPSJ0d2l0dGVyIGNpcmNsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNi40NDQgLTIuMjgxKSI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiMyZGFhZTEiIGRhdGEtbmFtZT0iRWxsaXBzZSAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjYuNDQ0IDIuMjgxKSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yOTcuNDQxLDE0OS42N2EyNi41MzgsMjYuNTM4LDAsMCwxLTcuNywyLjEzMywxMy41NTgsMTMuNTU4LDAsMCwwLDUuODkzLTcuNDkyLDI2LjYsMjYuNiwwLDAsMS04LjUxMiwzLjI4NywxMy4zMTYsMTMuMzE2LDAsMCwwLTkuNzgyLTQuMjc1LDEzLjQ3MSwxMy40NzEsMCwwLDAtMTMuNCwxMy41NDMsMTMuODM3LDEzLjgzNywwLDAsMCwuMzQ1LDMuMDg3LDM3LjkyMSwzNy45MjEsMCwwLDEtMjcuNjIyLTE0LjE1LDEzLjY1MSwxMy42NTEsMCwwLDAsNC4xNDcsMTguMDgsMTMuMjM0LDEzLjIzNCwwLDAsMS02LjA3MS0xLjY5M3YuMTcxYTEzLjUxNCwxMy41MTQsMCwwLDAsMTAuNzUsMTMuMjc4LDEzLjIsMTMuMiwwLDAsMS0zLjUzMS40NzUsMTMuNDYyLDEzLjQ2MiwwLDAsMS0yLjUyMy0uMjM4LDEzLjQzNiwxMy40MzYsMCwwLDAsMTIuNTE3LDkuNCwyNi43NTMsMjYuNzUzLDAsMCwxLTE5Ljg0MSw1LjYwNiwzNy42MzcsMzcuNjM3LDAsMCwwLDIwLjU0Miw2LjA4N2MyNC42NDgsMCwzOC4xMjktMjAuNjM2LDM4LjEyOS0zOC41MzJxMC0uODgxLS4wNDEtMS43NTJhMjcuNDY3LDI3LjQ2NywwLDAsMCw2LjctNy4wMloiIGRhdGEtbmFtZT0iUGF0aCAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODguMjMyIC0xMTcuNzY1KSIvPjwvZz48L3N2Zz4="
          alt=""
        />
      </Link>
    </div>
  );
}

export default TeamCard;
