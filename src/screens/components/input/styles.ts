import { styled } from "styled-components";
import { theme } from "../../../styles/theme";

type ContainerProps = {
    $variant: 'dark' | 'black';
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    width: 100%;

    label {
        font-size: 0.625rem;
        color: ${theme.colors.white};
    }
    input {
        height: 2.25rem;
        background-color: ${(props) => theme.colors[props.$variant]};
        border: 0;
        border-radius: 0.25rem;
        padding: 0 0.75rem;
        color: ${theme.colors.neutral};
        font-size: 1rem;
        width: 100%;
        border: 1px solid transparent;
        transition: all 100ms;

        &:focus {
            border-color: ${theme.colors.primary};
        }
    }
`; 

export const InputGrup = styled.div`
    display: flex;
    align-items: flex-end;
    max-width: 22rem;
    width: 100%;
    gap: 0.5rem;
`;
