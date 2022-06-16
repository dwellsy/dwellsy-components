/* src/App.jsx */
import { FunctionComponent } from "react";

type HeadingProps = {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  size?: "sm" | "md" | "lg" | "xl",
  children?: React.ReactNode;
}

export const Heading: FunctionComponent<HeadingProps> = ({ level, size, children }) => {
  const base_classes = "mt-1 font-semibold text-white sm:text-slate-900 dark:sm:text-white";
  const h1_classes = "md:text-2xl text-lg";
  const h2_classes = "md:text-2xl text-lg";
  const h3_classes = "md:text-2xl text-lg";
  const h4_classes = "md:text-2xl text-lg";
  const h5_classes = "md:text-2xl text-lg";
  const h6_classes = "md:text-2xl text-lg";

  const headingLevel = level === null ? "h3" : level; 

  switch(headingLevel) {
    case "h1": 
      return <h1 className={`${base_classes} ${h1_classes}`}>{ children }</h1>
      break;
    case "h2": 
      return <h2 className={`${base_classes} ${h2_classes}`}>{ children }</h2>
      break;
    case "h3": 
      return <h3 className={`${base_classes} ${h3_classes}`}>{ children }</h3>
      break;
    case "h4": 
      return <h4 className={`${base_classes} ${h4_classes}`}>{ children }</h4>
      break;
    case "h5": 
      return <h5 className={`${base_classes} ${h5_classes}`}>{ children }</h5>
      break;
    default:
      return <h6 className={`${base_classes} ${h6_classes}`}>{ children }</h6>
      break;
  }
}

export default Heading;