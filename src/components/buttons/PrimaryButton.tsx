import "../../App.css";

type ButtonProps = {
  label: String,
  primary?: boolean,
}

export const PrimaryButton = (props: ButtonProps) => {
  return (
    <button 
      className="px-10 py-3 text-sm text-white font-semibold rounded-full 
        border border-purple bg-purple
        hover:text-white hover:bg-purple-dark hover:border-purple-dark
    ">{ props.label }</button>
  );
}

export default PrimaryButton;
