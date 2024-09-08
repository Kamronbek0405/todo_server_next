import React, { ButtonHTMLAttributes,  ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; 
  className?: string;  
  onClick?: () => void; 
  type: "button" | "submit"
}

export const Button: React.FC<ButtonProps> = ({ children, type, className, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
