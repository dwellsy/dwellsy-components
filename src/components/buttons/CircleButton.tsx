import { FunctionComponent } from "react";
import "../../App.css";

type CircleButtonProps = {
  height: number,
  error: boolean,
  loading: boolean,
  children?: React.ReactNode,
  bgColor?: string,
}

export const CircleButton: FunctionComponent<CircleButtonProps> = (props) => {
  let type_classes = null;
  let hover_classes = null;
  let base_classes = "px-10 py-3 text-base";
  let common_classes = "";

  const backgroundColor = props.bgColor === null ? 'slate-500' : props.bgColor;
  base_classes = `px-10 py-3 font-semibold dark:text-white`;

  switch(props.type) {
    case "primary":
      type_classes = `text-white rounded-full bg-purple border-purple bg-purple`;
      hover_classes = "hover:text-white hover:bg-purple-dark hover:border-purple-dark";
      break;
    case "secondary":
      type_classes = `px-10 py-3 text-purple dark:text-purple font-semibold`;
      hover_classes = "hover:bg-gray-light";
      break;
    default:
      type_classes = "text-black dark:text-white";
      hover_classes = "";
      break;
  }
        
  return (
    <button 
      className={`${common_classes} ${base_classes} ${type_classes} ${hover_classes}
    `}
    onClick={onClick}
    >{ props.children }</button>
  );
}

export default CircleButton;