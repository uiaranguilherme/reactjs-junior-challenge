import styled from 'styled-components';
import { MdKeyboardArrowDown, RiUserAddLine } from '../../Icons';
import { Icons } from '../../GlobalStyles/StylesGeneral';
import { Celulas } from '../../GlobalStyles/StylesGeneral';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 88%;
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.border};
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid ${({theme}) => theme.border};

    div+div{
        border-left: 1px solid ${({theme}) => theme.border};
    }
`;


export const Status = styled.div`
    ${Celulas}
    width: 15%;
`;
export const Name = styled.div`
    ${Celulas}
    width: 25%;
    padding-left: 25px;
`;
export const Company = styled.div`
    ${Celulas}
    width: 20%;
`;
export const Phone = styled.div`
    ${Celulas}
    width: 20%;
`;
export const Email = styled.div`
    ${Celulas}
    width: 20%;
`;
export const Filter = styled.div`
    position: relative;
    width: 10%;
    ${Celulas};
`;

export const ArrowIcon = styled(MdKeyboardArrowDown)`
    ${Icons};
    color: ${({theme}) => theme.border};
    padding-top: 5px;

    &:hover{
        color: ${({theme}) => theme.colorRed200};
    }
`;

export const AddUserIcon = styled(RiUserAddLine)`
    ${Icons}
`;