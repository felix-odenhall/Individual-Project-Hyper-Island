import { useState, useEffect } from "react";
import QuestionsAndAnswersComponent from "./QuestionsAndAnswersComponent";

export default function QuestionsCategory({ temp }) {
  const [questionArr, setQuestionArr] = useState([]);
  const [isQuestionOpen, setIsQuestionOpen] = useState([]);

  const categoryArray = [];
  const firstObjectOfCategories = [];

  temp.forEach((object) => {
    if (!categoryArray.includes(object.category)) {
      categoryArray.push(object.category);
      firstObjectOfCategories.push(object);
    }
  });

  function handleClick(e) {
    const newArray = [];

    if (isQuestionOpen.includes(e.target.id)) {
      const openArray = [...isQuestionOpen];
      for (let i = 0; i < openArray.length; i++) {
        if (openArray[i] === e.target.id) {
          openArray.splice(i, 1);
        }
      }
      setIsQuestionOpen([...openArray]);
    } else {
      const openArray = [];
      openArray.push(e.target.id);
      setIsQuestionOpen([...openArray]);
    }
    temp.forEach((element) => {
      if (e.target.id === element.category) {
        newArray.push(element);
        console.log(element);
      }
    });
    setQuestionArr([...newArray]);
  }

  function renderCategoryQuestions(items) {
    let rows = [];
    console.log("this is items", items);
    items.forEach((item) => {
      rows.push(<QuestionsAndAnswersComponent key={item._id} item={item} />);
    });
    return rows;
  }

  useEffect(() => {
    rows = renderCategoryQuestions(questionArr);
  }, [questionArr]);

  let rows = [];

  return (
    <>
      <section className="flex flex-col ">
        {firstObjectOfCategories.map((e) => {
          return (
            <>
              <button
                className=" bg-primary-green-800 text-primary-green-100 text-lg m-1 p-2"
                onClick={handleClick}
                id={e.category}
                key={e._id}
              >
                {e.category}
              </button>
              {isQuestionOpen.includes(e.category) && (
                <div className="mb-3">
                  {renderCategoryQuestions(questionArr)}
                </div>
              )}
            </>
          );
        })}
      </section>
    </>
  );
}
