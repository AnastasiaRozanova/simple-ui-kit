import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import './styles.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & {
	theme?: 'primary' | 'secondary' | 'danger';
	size?: 'md' | 'lg';
	className?: string;
};

export const Button = ({ children, theme = 'primary', size = 'md', className, ...props }: ButtonProps) => (
		<button className={`button ${theme} ${size} ${className}`} {...props}>{children}</button>
);
