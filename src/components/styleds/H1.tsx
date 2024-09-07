import styled from "styled-components";

interface H1Props {
    color?: "black" | "white"
}

export const H1= styled.h1<H1Props>`
    font-size: 42px;
    text-align: center;
    letter-spacing: 2px;
    color: ${(props)=> props.color === "white" ? "#ffff" : "#000"}
`