import React from "react"

function Button(props) {
    const { text , style , onClick} = props;
  
    return (
        
      <button class="button-71" role="button" style={style ? style : { backgroundColor: "" , color:''}}
    onClick={onClick}>
        {text}
      </button>

      
    );
  }
  
  export default Button;
  
  


