import styled from 'styled-components';

export const Container = styled.div`
  width:300px;
  height:200px;
  display:flex;
  justify-content:center;
  align-items:center;
  box-shadow: 3px 3px 10px 2px rgba(50,50,50,0.2);
  border-radius:10px;
  flex-direction:column;
  margin:20px;
  cursor:pointer;
  transition:all 0.3s ease;
  &:hover{
    opacity:0.5;
  }
`;
export const TopCard = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  
  img{
    width:80px;
    height:80px;
  }
`;
export const BottomCard = styled.div`
   display:flex;
   width:80%;
  justify-content:space-between;


  strong{
    color:#ee6b26;
    font-weight:bold;
  }
  span{
    color:#707070;
    font-weight:400;
  }
`;
