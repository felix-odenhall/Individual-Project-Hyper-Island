import { useState, Fragment } from "react";
import {
  Bookingform,
  PopUpQandA,
  BookingInformation,
} from "../components/index";

export default function BookingRequest({ items, weeks }) {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedWeeks, setSelectedWeeks] = useState([]);
  let [isOpenCreate, setIsOpenCreate] = useState(false);
  let [isOpenInfo, setIsOpenInfo] = useState(false);

  function closeModal() {
    setIsOpenCreate(false);
    setIsOpenInfo(false);
  }

  function openModal(e) {
    if (e.target.id === "create") {
      setIsOpenCreate(true);
    } else {
      setIsOpenInfo(true);
    }
    console.log(e.target.id);
  }

  const handleClick = () => {
    setShowInfo(true);
  };

  //the three dots is making the the state update when adding something to the new array
  //... means copy all of the content to a new array
  function handleClickedWeek(week) {
    const clickedWeek = selectedWeeks;

    if (!clickedWeek.includes(week)) {
      clickedWeek.push(week);
      document.getElementById(`${week._id}`).className =
        "bg-primary-orange-400 text-primary-black text-lg w-72 m-1 p-2 text-left font-semibold";
    } else {
      clickedWeek.splice(clickedWeek.indexOf(week), 1);
      document.getElementById(`${week._id}`).className =
        "bg-primary-green-400 text-primary-black text-lg w-72 m-1 p-2 text-left font-semibold";
    }

    setSelectedWeeks([...clickedWeek]);
    console.log(selectedWeeks);
  }

  const rows = weeks.map((week) => {
    if (week.isAvailable === true) {
      return (
        <button
          onClick={() => handleClickedWeek(week)}
          className={`bg-primary-green-400 text-primary-black text-lg w-72 m-1 p-2 text-left font-semibold`}
          key={week._id}
          id={week._id}
        >
          <p>Vecka</p>
          {week.Vecka}
          <br />
          <p>Ankomst</p>
          {week.Ankomst}
          <br />
          <p>Avresa</p>
          {week.Avresa}
          <br />
        </button>
      );
    }
  });

  return (
    <>
      <PopUpQandA temp={items} />
      <Bookingform
        openModal={openModal}
        isOpenCreate={isOpenCreate}
        setIsOpenCreate={setIsOpenCreate}
        closeModal={closeModal}
      />
      <BookingInformation
        temp={items}
        isOpenInfo={isOpenInfo}
        setIsOpenInfo={setIsOpenInfo}
        closeModal={closeModal}
        openModal={openModal}
      />

      <h1 className=" text-2xl font-bold">Bokningförfrågan</h1>
      <p className=" italic">
        Obs. detta är en förfrågan och inte en bekräftad bokning
      </p>
      <div className="mb-48">
        <h2 className=" text-xl font-bold">Lediga veckor</h2>
        {rows}
      </div>
      <div className="fixed bottom-0 h-40 w-full bg-slate-500 flex justify-around items-center">
        <button
          className="p-4 bg-slate-50 text-slate-900"
          onClick={openModal}
          id="create"
        >
          Skapa Bokningförfrågan
        </button>
        <button
          className="p-4 bg-primary-orange-700 text-primary-white"
          onClick={openModal}
          id="info"
        >
          Info
        </button>
      </div>
      {/* <Bookingform /> */}
    </>
  );
}

//Added the revaidate: 1
//Next.js will attempt to re-generate the page:
// - When a request comes in
// - At most once every 10 seconds
export async function getStaticProps() {
  const res = await fetch("http://localhost:28017/QandA");
  const data = await res.json();

  const resTwo = await fetch("http://localhost:28017/bookableWeeks");
  const weeks = await resTwo.json();

  return {
    props: {
      items: data,
      weeks: weeks,
    },
    revalidate: 1,
  };
}
