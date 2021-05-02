import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
`;
export const FilterArea = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    margin-top:30px;
    flex-wrap:wrap;
    button{
       background:none;
       border:none;
    }
`;
export const Content = styled.div`
    display:flex;
    width:100%;
    flex-wrap:wrap;
    justify-content:center;
    
`;
export const Title = styled.div`
    width:100%;
    border-bottom:1px solid #20295f;
    justify-content:center;
    display:flex;
    margin-bottom:40px;
    h3{
        color:#20295f;
        width:200px;
        top:30px;
        text-align:center;
        position:relative;
        background:#fff;
    }
`;
