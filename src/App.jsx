import Board from './components/Board';
import { useState } from 'react';
import './style.scss';
import { calculateWinner } from './winner';

function App() {

  
const [square,setSquare]=useState(Array(9).fill(null))   ;
//create state for player
const [isXNext,setIsXNext] = useState(false);

const winner=calculateWinner(square);
//state of player to display msg
const nextPlayer= isXNext? 'x' :'0';

//status message

const statusMessage= winner? `winner is ${winner}` :` next player is ${nextPlayer}`;

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
              <h2 className='status-message'> {statusMessage} </h2>
             
             <Board square={square} handleSquareClick={handleSquareClick }/>
             
        </div>

    </div>  
  )
}


export default App
