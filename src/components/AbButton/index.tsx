import React from "react";
import styled, { css } from "styled-components";

export interface AbButtonProps {
    text?: string
    layout?: "primary" | "secondary"
    onClick?: () => void
}

const StyledButton = styled.button<AbButtonProps>`
    background: ${(props: AbButtonProps) => props.layout === "primary" ? "#EB9B00" : "#FFF"};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: AbButtonProps) => props.layout === "primary" ? "#FFF" : "#EB9B00"};
    font-size: 20px;
    cursor: pointer;
    ${(props: AbButtonProps) => props.layout === "primary" 
        ? css` 
            &:hover {
                background: #B87900;
                border: 2px solid #B87900;
            }
        ` 
        : css`
            &:hover {
                background: #FFF;
                color: #B87900;
                border: 2px solid #B87900;
        `
    }
   
`

export const AbButton = ({text, onClick, layout = "primary"}: AbButtonProps) => {
    return(
        <StyledButton onClick={onClick} layout={layout}>
            {text}
        </StyledButton>
    )
} 