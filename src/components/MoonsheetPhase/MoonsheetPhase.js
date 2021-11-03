import React from "react";
import "./MoonsheetPhase.css";

function MoonsheetPhase(props) {
  const { isDone, type, tasks } = props.data;
  const { phaseIndex } = props;

  return (
    <div className="moonsheet-phase">
      <div className={`phase-icon  mb-20px ${isDone ? "task-done" : ""}`}>
        {isDone ? (
          <svg
            data-v-3b87f77c=""
            data-v-29b219ff=""
            fill="#FFF"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              data-v-3b87f77c=""
              data-v-29b219ff=""
              d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
            ></path>
          </svg>
        ) : (
          phaseIndex
        )}
      </div>
      <p className="fs-24px purple weight-7 mb-20px">{type}</p>

      <div className="phase-cards">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`phase-card ${task.isTaskDone ? "done" : ""} `}
          >
            <p className="fs-17px dark-blue weight-7">{task.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoonsheetPhase;
