function Button({handleClick,names}){
    return(
        <button onClick={handleClick}>{names}</button>
    );
  }
  export default Button;