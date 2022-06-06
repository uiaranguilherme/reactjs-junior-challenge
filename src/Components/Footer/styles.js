import styled, { css } from 'styled-components';
import { FaPhoneAlt, FaInstagram, FaFacebookSquare, MdOutlineMail } from '../../Icons';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${({theme}) => theme.colorRed100};
    color: white;

    div{
        margin: 5px 3rem;

        li{
            display: flex;
            align-items: center;
        }
    }
`;

const IconsFooter = css`
    height: 1.3rem;
    width: 1.3rem;
    margin-right: 5px;
`;

export const PhoneIcon = styled(FaPhoneAlt)`
    ${IconsFooter}
`;
export const EmailIcon = styled(MdOutlineMail)`
    ${IconsFooter}
`;
export const FaceIcon = styled(FaFacebookSquare)`
    ${IconsFooter}
`;
export const InstaIcon = styled(FaInstagram)`
    ${IconsFooter}
`;