import React, { ReactNode } from "react"
import styled from "styled-components"

export interface CardProps {
    children: ReactNode
}

const StyledCard = styled.div`
    width: 550px;
    height: 65px;
    border-radius: 10px;
    padding: 48px, 32px, 48px, 48px;
    box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.25);
`

export const AbCard = ({children}: CardProps) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
};