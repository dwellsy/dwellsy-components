/* src/App.jsx */
import { Children, FunctionComponent, PropsWithChildren } from "react";
import "../../App.css";

type ParagraphProps = {
  size?: "sm" | "md" | "lg" | "xl",
  children?: React.ReactNode;
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({ size, children }) => {
  const base = "mt-4 leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-300";
  const size_class = size === null ? "text-sm" : `text-${size}`;

  return (
    <p className={`${base} ${size_class}`}>
      { children }
    </p>
  );
}

export default Paragraph;