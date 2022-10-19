import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ option, image, selectOption, answer, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      onClick={() => selectOption()}
      className={`
      option
        ${quizState.answerSelected && option === answer ? "correct" : ""} ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }
        ${hide ? "hide" : ""}
        `}
    >
      <p>{option}</p>
      <img src={image}  />
    </div>
  );
};

export default Option;
