import styled from "styled-components";

const LabelStyled = styled.label`
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px; 
    background-color: #6e6e6e; 
    color: white; 
    font-size: 16px; 
    cursor: pointer;
    transition: background-color 0.3s; 
    
    
`;

function Label(props) {
   return (
     <LabelStyled>
       {props.text}
       <select id="currency" name="currency" value={props.value} onChange={props.onChange}> 
         <option value="">Seleccionar moneda</option>
         <option value="MXN" >MXN</option>
         <option value="USD">USD</option>
         <option value="EUR">EUR</option>
         <option value="CAD">CAD</option>
         <option value="AUD">AUD</option>
         <option value="EGP">EGP</option>
       </select>
     </LabelStyled>
   );
 }
 
 
 export default Label;