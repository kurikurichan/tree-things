import React, { useState, useEffect } from "react";

const style = {
  wrapper: `pt-2`,
  searchHeader: `w-full font-bold flex justify-between items-center text-3xl p-4 overflow-hidden`,
  inputBoxes: `flex flex-col mb-4 relative`,
  inputBox: `h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2`,
  focusedInputBox: `border-black`,
  svgContainer: `mx-1`,
  input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full`,
  verticalLine: `w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem] top-[2rem]`,
};

const buttons = [
  {
    title: "all-time",
    action: null,
  },
  {
    title: "today",
    action: null,
  },
  {
    title: "7 day",
    action: null,
  },
  {
    title: "last month",
    action: null,
  },
];

const data = [
  {
    schoolName: "Thomas High School",
    points: 100,
  },
  {
    schoolName: "Thomas High School",
    points: 100,
  },
  {
    schoolName: "Thomas High School",
    points: 100,
  },
  {
    schoolName: "Thomas High School",
    points: 100,
  },
  {
    schoolName: "Thomas High School",
    points: 100,
  },
  {
    schoolName: "Thomas High School",
    points: 100,
  },
  {
    schoolName: "Thomas High School",
    points: 100,
  },
];

const LeaderBoard = ({ setShowLeaderBoard }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.searchHeader}>
        <span>Leader Board</span>
        <button onClick={() => setShowLeaderBoard(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center space-x-3">
        {buttons.map((t) => (
          <div className="flex space-x-2 my-2 items-center justify-around">
            <button
              onClick={() => console.log(t.title, "was clicked")}
              className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-500"
            >
              {t.title}
            </button>
          </div>
        ))}
      </div>
      <div className={style.inputBoxes}>
        {data.map((school, i) => (
          <div className="flex space-x-2 my-2 items-center justify-around" key={i}>
            <span className="text-xl font-semibold">{school.schoolName}</span>
            <span className="text-md text-zinc-600">{school.points}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
