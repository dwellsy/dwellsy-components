/* src/App.jsx */
import { FunctionComponent } from "react";

type SubheadingProps = {
  size?: "sm" | "md" | "lg" | "xl",
  children?: React.ReactNode;
}

export const Subheading: FunctionComponent<SubheadingProps> = ({ size, children }) => {
  const baseClasses = "text-sm leading-4 font-medium text-white sm:text-black lg:text-black dark:sm:text-white dark:md:text-white dark:lg:text-white";
  return <h3 className={`${baseClasses}`}>{ children }</h3>
}

export default Subheading;
