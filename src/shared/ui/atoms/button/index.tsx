import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import './styles.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & {
	theme?: 'primary' | 'secondary' | 'danger';
};

export const Button = ({ children, theme = 'primary', ...props }: ButtonProps) => (
		<button className={`button ${theme}`} {...props}>{children}</button>
);
