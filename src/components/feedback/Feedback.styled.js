import styled from "styled-components";


export const Button = styled.button`
    
    height: 30px;
    background: #4169E1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: 0;
    padding: 15px;
    margin-left: 10px;

    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.4px;
    text-align: center;
    letter-spacing: 0.06em;
    color: #FFFFFF;
    cursor: pointer;

    &:hover,
    &:focus {
        background: #800080;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    }
`