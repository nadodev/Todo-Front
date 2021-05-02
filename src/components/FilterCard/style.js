import styled from 'styled-components';

export const Container = styled.div`
  width:260px;
  height:80px;
  background-color:${props => props.actived ? '#ee6b26' : '#20295f'};
  border-radius:5px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  img{
    width:25px;
    height:25px;
    margin:10px;
  }
  span{
    color:white;
    margin:0 20px 0 10px;
    font-weight:bold;
    align-self:flex-end;
  }
  transition:0.5s;
  &:hover{
    background-color:#ee6b26;
    cursor: pointer;
  }
`;
