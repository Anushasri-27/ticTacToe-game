import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';
import './style.scss';


function App() {

  
const [square,setSquare]=useState(Array(9).fill(null))   ;
//create state for player
const [isXNext,setIsXNext] = useState(false);

const winner=calculateWinner(square);


const handleSquareClick = clickedPosition => {
      //to prevent chnaging of value once the square is filled
      if(square[clickedPosition]  || winner ){
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
  
  return (
    <div className="app">
        <div>
             
             <StatusMessage winner={winner} isXNext={isXNext}  square={square}/> 
             <Board square={square} handleSquareClick={handleSquareClick }/>
             
        </div>

    </div>  
  )
}


export default App
