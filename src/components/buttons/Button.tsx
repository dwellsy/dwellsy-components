import { FunctionComponent } from "react";
import "../../App.css";

type ButtonProps = {
  label: String,
  type?: "primary" | "secondary" | "", 
  size?: "sm" | "base" | "lg" | "xl",
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
  let type_classes = null;
  let hover_classes = null;
  let base_classes = "px-10 py-3 text-base font-semibold";
  let common_classes = "text-black font-semibold";

  const size = props.size === null ? "base" : props.size;
  base_classes = `px-10 py-3 text-${size} font-semibold dark:text-white`;

  switch(props.type) {
    case "primary":
      type_classes = `text-${size} text-white rounded-full bg-purple border-purple bg-purple dark:text-white`;
      hover_classes = "hover:text-white hover:bg-purple-dark hover:border-purple-dark";
      break;
    case "secondary":
      type_classes = `px-10 py-3 text-${size} text-purple dark:text-purple font-semibold`;
      hover_classes = "hover:bg-gray-light";
      break;
    default:
      break;
  }
        
  return (
    <button 
      className={`${common_classes} ${base_classes} ${type_classes} ${hover_classes}
    `}>{ props.label }</button>
  );
}

export default Button;