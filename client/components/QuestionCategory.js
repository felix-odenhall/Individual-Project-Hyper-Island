import { useState, useEffect } from "react";
import QuestionsAndAnswersComponent from "./QuestionsAndAnswersComponent";

export default function QuestionsCategory({ temp }) {
  const [questionArr, setQuestionArr] = useState([]);
  const [isShown, setIsShown] = useState(false);

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
    temp.forEach((element) => {
      if (e.target.id === element.category) {
        newArray.push(element);
      }
    });
    setQuestionArr([...newArray]);
  }

  function renderCategoryQuestions(items) {
    let rows = [];
    items.forEach((item, i) => {
      rows.push(<QuestionsAndAnswersComponent key={item._id} item={item} />);
    });
    console.log(rows);
    return rows;
  }

  useEffect(() => {
    console.log("Question ARR: ", questionArr);
    rows = renderCategoryQuestions(questionArr);
    console.log("rows:", rows);
  }, [questionArr]);

  let rows = [];
  return (
    <>
      {firstObjectOfCategories.map((e) => {
        return (
          <button onClick={handleClick} id={e.category} key={e._id}>
            {e.category}
          </button>
        );
      })}
      {renderCategoryQuestions(questionArr)}
    </>
  );
}
