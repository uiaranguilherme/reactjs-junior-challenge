import styled from 'styled-components';
import { Celulas, Icons } from '../../GlobalStyles/StylesGeneral';
import { FiEdit, HiOutlineTrash } from '../../Icons';

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 2.5rem;
    width: 100%;

    div {
        border-bottom: 1px solid ${({theme}) => theme.border};
    }
`;
export const CellStatus = styled.div`
    ${Celulas};
    cursor: pointer;
    color: white;
    font-size: 1.3rem;
    width: 14.5%;
    height: 90%;
    border-radius: 3px;
    margin: 0 0.25rem 0 0.25rem;
    max-width: 15%;
    font-size: 1rem;
    font-weight: 500;
    background-color: ${(props) => props.color ? props.theme.active : props.theme.desative};
`;
export const CellName = styled.div`
    ${Celulas};
    font-weight: 400;
    width: 25%;
    max-width: 25%;
    font-size: 1rem;
`;
export const CellCompany = styled.div`
    ${Celulas};
    font-weight: 400;
    width: 20%;
    max-width: 20%;
    font-size: 1rem;
`;
export const CellPhone = styled.div`
    ${Celulas};
    font-weight: 400;
    width: 20%;
    max-width: 20%;
    font-size: 1rem;
`;
export const CellEmail = styled.div`
    ${Celulas};
    justify-content: flex-start;
    font-weight: 400;
    padding: 0 0 0 10px;
    width: 20%;
    max-width: 20%;
    font-size: 1rem;
`;
export const Filter = styled.div`
    position: relative;
    width: 10%;
    max-width: 10%;
    font-size: 1rem;
    ${Celulas};
`;

export const EditIcon = styled(FiEdit)`
    ${Icons};
    height: 1.2rem;
    width: 1.2rem;
`;
export const TrashIcon = styled(HiOutlineTrash)`
    ${Icons}
    height: 1.4rem;
    width: 1.4rem;
`;