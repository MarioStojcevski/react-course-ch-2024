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
      {boardArray.map((_, index) => {
        if(index % 3 === 0) {
          return (
            <div key={index}>
              {[0, 1, 2].map((i) => (
                <Field 
                  key={i} 
                  element={boardArray[index + i]}
                  clickFieldHandler={fieldClick} 
                  index={index + i} />
            ))}
            </div>
          )
        }        
      })}
    </>
  ); 
};

export default Board;