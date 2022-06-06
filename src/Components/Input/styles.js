import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  align-items: center;
  position: relative;


    input {
        
        height: 2.7rem;
        border: 1px solid ${({theme}) => theme.border};
        background-color: transparent;
        font-size: 1.2rem;
        border-radius: 8px;
        padding: 0 0.5rem;
        margin: 0 5px;
        transition: 150ms;
        width: ${(props) => props.width};

        &::placeholder {
            color: transparent;
        }

        &:hover {
            border: 1px solid ${({theme}) => theme.colorRed200};
        }

        &:focus {
            border-bottom: 3px solid ${({theme}) => theme.colorRed200};
        }
    }

    label {
        position: absolute;
        padding-left: 0.6rem;
        font-size: 1.1rem;
        color: ${({theme}) => theme.text100};
        transition: all 150ms;
    }


    input:focus+label,
    input:not(:placeholder-shown)+label {
        transform: translateY(-25px);
        background-color: white;
    }
`;