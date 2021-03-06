import { FunctionComponent } from "react";

type HeadingProps = {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl",
  children?: React.ReactNode;
}


export const Heading: FunctionComponent<HeadingProps> = ({ level, size, children }) => {
  const headingLevel = level ? level : "h3"; 
  const CustomHeading = `${headingLevel}` as keyof JSX.IntrinsicElements;
  const base_classes = "mt-1 font-semibold text-white sm:text-slate-900 dark:sm:text-white mb-2";
  const size_class = size === null ? "md:text-2xl text-2xl" : `md:text-${size} text-${size}`;

  return (
    <CustomHeading className={`font-sans ${base_classes} ${size_class}`}>{ children }</CustomHeading>
  );
}

export default Heading;