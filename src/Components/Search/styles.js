import styled from 'styled-components';
import { BiSearch, IoClose } from '../../Icons';
import { Icons } from '../../GlobalStyles/StylesGeneral';

export const Container = styled.div`
    display: flex;
    margin-top: 3rem;
    height: 4rem;
`;
export const Search  = styled.div`
       
`;
export const CloseIcon = styled(IoClose)`
    ${Icons}
`;

export const SearchIcon = styled(BiSearch)`
    ${Icons};
    color: white;
`;