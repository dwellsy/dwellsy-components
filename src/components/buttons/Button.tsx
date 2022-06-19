import { FunctionComponent } from "react";
import "../../App.css";

type ButtonProps = {
  children?: React.ReactNode,
  type?: "primary" | "secondary" | "", 
  size?: "sm" | "base" | "lg" | "xl",
  error?: boolean,
  loading?: boolean,
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  type,
  size,
  error = false,
  loading = false,
  disabled = false,
  onClick = () => {},
}) => {
  let typeClasses = null;
  let hoverClasses = null;
  let baseClasses = "px-10 py-3 text-base inline-flex items-center justify-between";
  let errorClasses;
  let disabledClasses;

  const actualSize = size === null ? "base" : size;
  baseClasses = `inline-flex px-10 py-3 text-${size} font-semibold dark:text-white items-center`;

  switch(type) {
    case "primary":
      typeClasses = `text-${size} text-white rounded-full bg-purple border-purple bg-purple`;
      hoverClasses = "hover:text-white hover:bg-purple-dark hover:border-purple-dark";
      break;
    case "secondary":
      typeClasses = `px-10 py-3 text-${size} text-purple dark:text-purple font-semibold`;
      hoverClasses = "hover:bg-gray-light";
      break;
    default:
      typeClasses = "text-black dark:text-white";
      hoverClasses = "";
      break;
  }

  if(error) {
    errorClasses = "bg-red-600 scale-110 shake active:bg-red-600";
    hoverClasses = "hover:bg-red-900";
  }

  if(disabled) {
    baseClasses = `px-10 py-3 text-${size} font-semibold dark:text-slate-500 text-slate-400`;
    if(type === "primary") {
      typeClasses = `text-${size} text-white rounded-full bg-purple border-purple bg-slate-100`;
    }
    errorClasses = "";
    hoverClasses = "";
  }

  return (
    <button 
      onClick={onClick}
      { ...disabled === true && "disabled" }
      className={`${errorClasses} ${baseClasses} ${typeClasses} ${hoverClasses} ${errorClasses} ${disabledClasses}
    `}>{ !loading ? children : "- Loading -"}</button>
  );
}

export default Button;