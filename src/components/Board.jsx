import Square from "./Square"
import { useState } from "react"
const Board =()=>{

const [square,setSquare]=useState(Array(9).fill(null))   ;
//create state for player
const [isXNext,setIsXNext] = useState(false);
const handleSquareClick = clickedPosition => {
      //to prevent chnaging of value once the square is filled
      if(square[clickedPosition]){
          return;
      }
      //set value in sq as per logic
      setSquare( currentSquare => {
        return currentSquare.map((squareValue,position)=>{
          if(clickedPosition === position){
               return isXNext ? 'X' : '0';
          }

          return squareValue;

        });
      });
      setIsXNext((currentIsXNext)=> !currentIsXNext);
};



const renderSquare = position => {
     return (
          <Square value={square[position]} onClick={()=>handleSquareClick(position)} />
     );
};

return(
         <div className="board">
               <div className="board-row">
                   { renderSquare(0)}
                   { renderSquare(1)}
                   { renderSquare(2)}

               </div>
               <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}

               </div>
               <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}

               </div>
         </div>

);

};

export default Board