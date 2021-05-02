import styled from 'styled-components';

export const Container = styled.div`
    background-color:#20295F;
    border-bottom:5px solid #EE6B26;
    width:100%;
  header{

    height:70px;
    display:flex;
    justify-content:space-between;
    margin: 0 50px;
    align-items:center;
    img{
      width:120px;
      height:53px;
    }
    nav {
      list-style:none;
      display:flex;
      align-items:center;
      justify-content:center;
        a, button{
           text-decoration:none;
          background:none;
          border:none;
          cursor:pointer;
           margin-left:20px;
           color:white;
           transition:all 0.5s;
           &:hover{
            color:#EE6B26;
          }
        }
        .divider::after{
            content:"•";
            color:white;
            padding-left:10px;
          }
        #notification{
            img{
              width:27px;
              height:28px;
            }
            span{
              background-color:white;
              color:#EE6B26;
              padding:1px 8px ;
              border-radius:50%;
              position: relative;
              top:-20px;
              left:-15px;
            }
            &:hover{
              opacity:0.5;
            }
          }
      }
    }
`;

