import { FunctionComponent } from "react";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6,
  size?: "sm" | "md" | "lg" | "xl",
  children?: React.ReactNode;
}


export const Heading: FunctionComponent<HeadingProps> = ({ level, size, children }) => {
  const headingLevel = level === null ? 3 : level; 
  const CustomHeading = `h${headingLevel}` as keyof JSX.IntrinsicElements;
  const base_classes = "mt-1 font-semibold text-white sm:text-slate-900 dark:sm:text-white";
  const size_class = size === null ? "md:text-2xl text-2xl" : `md:text-${size} text-${size}`;

  return (
    <CustomHeading className={`${base_classes} ${size_class}`}>{ children }</CustomHeading>
  );
}

export const Test = () => {
  return <Heading size=
}

export default Heading;
