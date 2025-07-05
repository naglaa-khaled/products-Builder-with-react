import type { ReactNode,ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full"|"w-fit";
}

const Button = ({ children, className, width, ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width} p-2 flex-1 rounded-md text-white
        p-2 flex-1 rounded-md text-white cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
