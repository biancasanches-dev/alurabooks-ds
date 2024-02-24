import React from "react"
import styled from "styled-components"

export interface AbTagProps {
    text: string
}

export const StyledTag = styled.div`
    padding: 24px 32px;
    background: #EB9B00;
    color: #FFF;
    font-weight: 600;
    font-size: 24px;
    font-family: sans-serif;
    display: inline-block;
`

export const AbTag = ({text}: AbTagProps) => {
    return(
        <StyledTag>
            {text}
        </StyledTag>
    )
}