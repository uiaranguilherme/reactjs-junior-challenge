import styled from "styled-components";
import { FiLogOut, FaCog } from '../../Icons';
import { Icons } from '../../GlobalStyles/StylesGeneral';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.colorRed100};
    background-color: white;
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 1rem;
    padding: 1rem 0 ;
    img{
        height: 3rem;
        width: 15rem;
    }
`;
export const UserArea = styled.section`
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 1rem;
`;
export const CircleUser = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    height: 4rem;
    width: 4rem;
    border: 1px solid ${({theme}) => theme.colorRed200};
    border-radius:50%;
    opacity: .8;

    &:hover{
        opacity: 1;
    }
`;
export const IconConfig = styled(FaCog)`
    ${Icons}
`;
export const IconLogout = styled(FiLogOut)`
    ${Icons}
`;