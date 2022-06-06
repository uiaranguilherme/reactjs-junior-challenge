import styled, {css} from 'styled-components';
import { BsArrowLeft, BsArrowRight } from '../../Icons';

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 3rem;
    margin-top: 1rem;
`;
export const ArrowLeftIcon = styled(BsArrowLeft)``;
export const ArrowRigthIcon = styled(BsArrowRight)``;
export const PagesArea = styled.div`
    
    display: flex;
`;

const page = css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
`;
export const Page = styled.button`
    ${page};
    opacity: .8;
    color: white;
    font-size: 1rem;
    background-color: ${({theme}) => theme.colorRed200};

    p{
        margin-top: -3px;
    }
`;
export const PageLeft = styled.div`
    ${page};
    cursor: pointer;
    border: 1px solid ${({theme}) => theme.border};

    svg{
        height: 1.4rem;
        width: 1.4rem;
    }

    &:hover{
        border-color: ${({theme}) => theme.colorRed200};
    }

    &:hover > svg{
        color: ${({theme}) => theme.colorRed200};
    }
`;
export const PageRigth = styled.div`
    ${page};
    cursor: pointer;
    border: 1px solid ${({theme}) => theme.border};

    svg{
        height: 1.4rem;
        width: 1.4rem;
    }

    &:hover{
        border-color: ${({theme}) => theme.colorRed200};
    }

    &:hover > svg{
        color: ${({theme}) => theme.colorRed200};
    }
`;