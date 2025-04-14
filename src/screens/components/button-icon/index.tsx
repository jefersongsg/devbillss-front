import { ComponentProps, forwardRef } from 'react';
import { Container } from './styles';
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';

type ButtonIconProps = ComponentProps<'button'>;

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
    ({ ...props }, ref) => {
        return (
            <Container {...props} ref={ref}>
                <MagnifyingGlass/>
            </Container>
        );
    }
);