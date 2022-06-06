import { css } from 'styled-components'

export const Icons = css`
    cursor: pointer;
    height: 1.8rem;
    width: 1.8rem;
    color: #C44B4F;
    opacity: 0.8;


    &:hover{
        opacity:1;
    }
`;

export const Celulas = css`
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-left: 8px;
    font-size: 1.2rem;
    font-weight: 500;
    overflow: hidden;
    
    p{
        overflow: hidden;
        max-width: 95%;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;