import styled from "styled-components";

export const Buttom = styled.button`
    color: white;
    background-color: black;
    border: 1px white solid;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;

    &:hover{
        color: black;
        background-color: white;
        border: 1px black solid;
        box-shadow: 0 0 0 5px rgb(0,0,0,0.5);
    }
`