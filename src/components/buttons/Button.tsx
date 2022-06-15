import { FunctionComponent } from "react";
import "../../App.css";

type ButtonProps = {
  label: String,
  primary?: boolean,
  secondary?: boolean,
  size?: String,
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
  let primary_classes = null;
  let secondary_classes = null;
  let hover_classes = null;
  
  let base_classes = "px-10 py-3 text-sm font-semibold";
  let normal_classes = "text-black font-semibold";

  if(props.primary) {
    primary_classes = "text-white rounded-full bg-purple border-purple bg-purple";
    hover_classes = "hover:text-white hover:bg-purple-dark hover:border-purple-dark";
  }
        
  if(props.secondary) {
    secondary_classes = "px-10 py-3 text-sm text-purple font-semibold";
    hover_classes = "hover:bg-gray-light";
  }

  if(props.size === "md") 
    base_classes = "px-10 py-3 text-md font-semibold";

  if(props.size === "lg")
    base_classes = "px-10 py-3 text-lg font-semibold";

  return (
    <button 
      className={`${normal_classes} ${base_classes} ${primary_classes} ${secondary_classes} ${hover_classes}
    `}>{ props.label }</button>
  );
}

export default Button;