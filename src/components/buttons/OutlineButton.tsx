import { FunctionComponent } from "react";
import "../../App.css";

type OutlineButtonProps = {
  children?: React.ReactNode,
  size?: "sm" | "base" | "lg" | "xl" | null,
  error?: boolean,
  loading?: boolean,
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export const OutlineButton: FunctionComponent<OutlineButtonProps> = ({
  children,
  size,
  error = false,
  loading = false,
  disabled = false,
  onClick = () => {},
}) => {
  let typeClasses = "";
  let hoverClasses = "";
  let baseClasses = "px-10 py-3 text-base inline-flex items-center justify-between";
  let errorClasses = "";
  let disabledClasses = "";

  const actualSize = size === null ? "base" : size;
  baseClasses = `inline-flex px-10 py-3 text-${actualSize} font-semibold dark:text-white items-center`;
  typeClasses = "inline-block text-sm px-4 py-2 leading-none border rounded text-black dark:text-white border-slate-900 dark:border-white hover:border-black hover:text-slate-900 hover:bg-gray-200 mt-4 lg:mt-0 ";
  hoverClasses = "hover:border hover:border-slate-500 hover:bg-slate-100";

  if(error) {
    errorClasses = "bg-red-600 active:bg-red-600";
    hoverClasses = "hover:bg-red-900";
  }

  if(disabled) {
    baseClasses = `px-10 py-3 text-${actualSize} font-semibold dark:text-slate-500 text-slate-400`;
    errorClasses = "";
    hoverClasses = "";
  }

  return (
    <button 
      onClick={disabled !== true ? onClick : () => {}}
      disabled={disabled}
      className={`${baseClasses} ${typeClasses} ${hoverClasses} ${errorClasses} ${disabledClasses}
    `}>{ !loading ? children : "- Loading -"}</button>
  );
}

export default OutlineButton;
