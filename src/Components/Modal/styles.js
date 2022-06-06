import styled from 'styled-components';

export const Whapper = styled.section`
    display: ${(props) => props.display};
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(222, 220, 197, 0.5);
`;

export const Container = styled.div`
    overflow: hidden;
    position: relative;
    display: ${(props) => props.display};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 35%;
    height: auto;
    padding: 10px 0;
    border-radius: 8px;
    background-color: white;
    border: 1px solid ${({theme}) => theme.border};

    header{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        font-weight: 500;
        width: 100%;
        height: 2.5rem;
        border-bottom: 1px solid ${({theme}) => theme.border};
    }
`;

export const Line = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
    width: 100%;

    textarea{
        height: 10rem;
        padding: 5px 10px;
        font-size: 1rem;
        border-radius: 8px;
        width: calc(100% - 20px);
        border: 1px solid ${({theme}) => theme.border};

        &:hover, &:focus{
            border: 1px solid ${({theme}) => theme.colorRed200};
        }
    }
`;

export const Section = styled.section`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    height: 5rem;

    div{
        display: flex;
    }
`;

