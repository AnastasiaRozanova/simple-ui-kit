import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import './styles.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & {
	theme?: 'primary' | 'secondary' | 'danger';
	className?: string;
};

export const Button = ({ children, theme = 'primary', className, ...props }: ButtonProps) => (
		<button className={`button ${theme} ${className}`} {...props}>{children}</button>
);
