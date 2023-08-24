/* eslint-disable react/prop-types */
import React from "react";
const StatusMessage =({winner , isXNext ,square}) =>{
    const noMovesLeft= square.every(squareValue => squareValue !== null);
    const nextPlayer= isXNext ? 'x' :'0';

    //status message
    const renderStatusMessage =() => {

         if(winner){
          return (
                  <React.Fragment> 
                      winner is { ' '}
                      <span className={winner ==='x' ? 'text-green' :' text-orange'}>
                        {winner}
                      </span>
                  </React.Fragment>)
         }

         if(!winner && noMovesLeft){
            return ( 
               <>  
               <span className="text-orange">0</span> and  { ' '}
               <span className="text-green">x</span> tied
               </>
         
            )
         }

         if(!winner && !noMovesLeft){
             return (  
              <> 
                  next player is{' '} 
                 <span className={isXNext ? 'text-green' : 'text-orange'}>
                  { nextPlayer}
                 </span>
              
              </>
        
             )
            }
        

    return null;

    }
    

   return (
              <h2 className="status-message">{renderStatusMessage()}</h2>

   );
};

export default StatusMessage;