import type { HTMLAttributes } from "react";
interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor = ({ color,...rest }: IProps) => {
  return (
    <span
      className=" block w-5 h-5 bg-indigo-600 rounded-full cursor-pointer "
      style={{ backgroundColor: color }}
      {...rest}
    ></span>
  );
};
export default CircleColor;
