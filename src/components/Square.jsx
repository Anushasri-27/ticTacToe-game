// eslint-disable-next-line react/prop-types
const Square = ({value,onClick})=>{
 
    return(
        <button type="submit" className="square " onClick={onClick}>
            
            {value}
        
        </button>
    )

}

export default Square