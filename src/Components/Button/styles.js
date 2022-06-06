import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 10px;
`;

export const Primary = styled.button`
    
    cursor: pointer;
    display: flex;
    align-items: center;
    width: auto;
    height: 2.7rem;
    padding: 3px 10px;
    border-radius: 8px;
    font-size: 1.1rem;
    color: ${({theme}) => theme.white};
    background-color: ${({theme}) => theme.colorRed200};
    opacity: .8;
    

    &:hover{
        opacity: .9;
    }

    &:focus{
        cursor: wait;
        opacity: .9;
    }
`;

export const Secundary = styled.button`
    
    cursor: pointer;
    display: flex;
    align-items: center;
    width: auto;
    height: 2.7rem;
    padding: 3px 10px;
    border-radius: 8px;
    font-size: 1.1rem;
    opacity: .8;
    border: 1px dashed transparent;
    color: ${({theme}) => theme.text100};
    background-color: ${({theme}) => theme.white};
    

    &:hover{
        opacity: .9;
        border-color: ${({theme}) => theme.colorRed200};
    }

    &:focus{
        cursor: wait;
        opacity: .9;
        border-color: ${({theme}) => theme.colorRed200};
    }
`;