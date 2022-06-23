import { FunctionComponent } from "react";
import { 
  DefaultButton,
  OutlineButton,
  PrimaryButton,
  SecondaryButton 
} from './'; 

type ButtonProps = {
  children?: React.ReactNode,
  type?: "primary" | "secondary" | "outline" | null 
  size?: "sm" | "base" | "lg" | "xl" | null,
  error?: boolean,
  loading?: boolean,
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  className?: String,
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  type,
  size,
  error = false,
  loading = false,
  disabled = false,
  onClick = () => {},
  className = "",
}) => {
  switch(type) {
    case "primary":
      return <PrimaryButton size={size} error={error} loading={loading} disabled={disabled} onClick={onClick} className={className}>{ children }</PrimaryButton>
    case "secondary":
      return <SecondaryButton size={size} error={error} loading={loading} disabled={disabled} onClick={onClick} className={className}>{ children }</SecondaryButton>
    case "outline":
      return <OutlineButton size={size} error={error} loading={loading} disabled={disabled} onClick={onClick} className={className}>{ children }</OutlineButton>
    default:
      return <DefaultButton size={size} error={error} loading={loading} disabled={disabled} onClick={onClick} className={className}>{ children }</DefaultButton>
  }
}

export default Button;