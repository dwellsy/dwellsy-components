import { FunctionComponent } from "react";
import "../../App.css";

type PrimaryButtonProps = {
  children?: React.ReactNode,
  size?: "sm" | "base" | "lg" | "xl" | null,
  error?: boolean,
  loading?: boolean,
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  className?: string,
}

export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
  children,
  size,
  error = false,
  loading = false,
  disabled = false,
  onClick = () => {},
  className = "",
}) => {
  let typeClasses = "";
  let hoverClasses = "";
  let baseClasses = "px-10 py-3 text-base inline-flex items-center justify-between";
  let errorClasses = "";
  let disabledClasses = "";

  const actualSize = size === null ? "base" : size;
  baseClasses = `inline-flex px-10 py-3 text-${actualSize} font-semibold dark:text-white items-center`;
  typeClasses = `text-${actualSize} text-white rounded-full bg-purple`;
  hoverClasses = "hover:text-white hover:bg-purple-800";

  if(error) {
    errorClasses = "bg-red-600 active:bg-red-600";
    hoverClasses = "hover:bg-red-900";
  }

  if(disabled) {
    baseClasses = `px-10 py-3 text-${actualSize} font-semibold dark:text-slate-500 text-slate-400`;
    typeClasses = `text-${actualSize} text-white rounded-full bg-purple border-purple bg-slate-100`;
    // errorClasses = "";
    // hoverClasses = "";
  }

  return (
    <button 
      onClick={disabled !== true ? onClick : () => {}}
      disabled={disabled}
      className={`${baseClasses} ${typeClasses} ${hoverClasses} ${errorClasses} ${disabledClasses} ${className}
    `}>{ !loading ? children : "- Loading -"}</button>
  );
}

export default PrimaryButton;
