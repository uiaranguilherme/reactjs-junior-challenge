import styled from 'styled-components';

export const Message = styled.div`
    flex-direction: column;
    height: 99%;

    font-size: 2rem;
    text-align: left;
`;

export const MessageArea = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-around;
    width: 90%;
    min-height: 10rem;

    border-radius: 8px;
    background-color: white;
    border: 1px solid ${({theme}) => theme.border};

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        div{
            width:50% ;
        }
    }
`;