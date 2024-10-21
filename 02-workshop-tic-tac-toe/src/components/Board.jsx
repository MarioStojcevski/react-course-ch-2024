import { useState, useEffect } from "react";

import Field from "./Field";
import checkWinner from "../utils/checkWinner";

const Board = () => {
  const [boardArray, setBoardArray] = useState(Array(9).fill(null));
  const [isCurrentPlayerX, setIsCurrentPlayerX] = useState(true);

  const fieldClick = (index) => {
    setBoardArray((previousBoardArray) => {
      let newBoardArray = [...previousBoardArray];

      if(previousBoardArray[index] === null) {
        newBoardArray[index] = isCurrentPlayerX ? "X" : "O";
        setIsCurrentPlayerX(!isCurrentPlayerX);
      }

      return newBoardArray;
    });
  }

  useEffect(() => {
    const winner = checkWinner(boardArray);

    if(winner !== null) {
      alert(`Winner is ${winner}`);
    }
  }, [boardArray]);

  return (
    <>
      {boardArray.map((_, index) => (
          <Field 
            key={index} 
            clickFieldHandler={fieldClick} 
            index={index}
            element={boardArray[index]} />
        )
      )}
    </>
  ); 
};

export default Board;