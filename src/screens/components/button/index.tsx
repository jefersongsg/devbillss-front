import { ComponentProps, forwardRef } from 'react';
import { Container } from './styles';

type ButtonProps = ComponentProps<'button'> & {
    variant?: 'default' | 'outline';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = 'default', ...props }, ref) => {
        return (
            <Container $variant={variant} {...props} ref={ref}>
                {children}
            </Container>
        );
    }
);