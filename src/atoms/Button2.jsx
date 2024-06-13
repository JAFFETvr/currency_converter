import styled from 'styled-components';

const ButtonStyled = styled.button`

   width: 30%;
   height: 40px;
   background-color:  #a30000;
   border: 1px gray solid;
   border-radius: 5px;
   color: white;
   box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

   &:hover {
    background-color: #4d53fd;
   }

`;
function Button2({ title, onClick }) {
    return (
      <ButtonStyled onClick={onClick}>{title}</ButtonStyled>
    );
  }
  
export default Button2