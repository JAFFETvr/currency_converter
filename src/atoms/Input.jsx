import styled from "styled-components";

const InputStyled= styled.input`
   width: 80%;
   height: 40px;
   border: 1px gray solid;
   border-radius: 5px;
   font-size: 18px;
   color: #0308a3;
   display: block;
   margin: 3px;

`;
function Input(props) {
     return (
       <InputStyled
         type={props.type}
         placeholder={props.placeholder}
         value={props.value}
         onChange={props.onChange}
       />
     );
   }
   
   export default Input;