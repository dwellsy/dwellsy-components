import "../App.css";
import LogoImage from '../assets/logos/logoMobile.svg';

function Logo({ className = ""}: { className: string }) {
  return (
    <img className={className} src={LogoImage} alt="Dwellsy" />
  );
}

export default Logo;

