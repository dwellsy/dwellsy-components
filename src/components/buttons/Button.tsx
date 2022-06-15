import { FunctionComponent } from "react";
import "../../App.css";

type ButtonProps = {
  label: String,
  type?: "primary" | "secondary",
  size?: "sm" | "md" | "lg"
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
  let type_classes = null;
  let hover_classes = null;
  let base_classes = "px-10 py-3 text-sm font-semibold";
  let normal_classes = "text-black font-semibold";

  switch(props.type) {
    case "primary":
      type_classes = "text-white rounded-full bg-purple border-purple bg-purple";
      hover_classes = "hover:text-white hover:bg-purple-dark hover:border-purple-dark";
      break;
    case "secondary":
      type_classes = "px-10 py-3 text-sm text-purple font-semibold";
      hover_classes = "hover:bg-gray-light";
      break;
    default:
      break;
  }
        
  if(props.size === "sm") 
    base_classes = "px-10 py-3 text-sm font-semibold";

  if(props.size === "md") 
    base_classes = "px-10 py-3 text-md font-semibold";

  if(props.size === "lg")
    base_classes = "px-10 py-3 text-lg font-semibold";

  return (
    <button 
      className={`${normal_classes} ${base_classes} ${type_classes} ${hover_classes}
    `}>{ props.label }</button>
  );
}

export default Button;