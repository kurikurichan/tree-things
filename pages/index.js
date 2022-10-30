import Map from "../components/Map";
import { useEffect, useState } from "react";
import MainNavbar from "../components/Navbar";
import AddSessionModal from "../components/AddSessionModal";
import LeaderBoard from "../components/LeaderBoard";

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  leaderBoardContainer: `h-full w-[350px] ml-[1rem] py-[3rem] absolute top-10 left-0 lg:flex md:flex hidden flex-col justify-end z-20 `,
  leaderBoard: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showLeaderBoard, setShowLeaderBoard] = useState(true);

  useEffect(() => {
    setShowLeaderBoard(true);
  }, []);

  return (
    <div className={style.wrapper}>
      <MainNavbar />
      <div className={style.main}>
        <Map />
        {showLeaderBoard ? (
          <div className={style.leaderBoardContainer}>
            <div className={style.leaderBoard}>
              <LeaderBoard
                showModal={showModal}
                setShowLeaderBoard={setShowLeaderBoard}
              />
            </div>
          </div>
        ) : null}
        <div className="fixed bottom-5 right-5">
          <button
            className="flex flex-row items-center rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-4 h-4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </button>
          {showModal ? (
            <AddSessionModal
              showModal={showModal}
              setShowModal={setShowModal}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
