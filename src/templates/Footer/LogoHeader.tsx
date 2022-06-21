import Logo from '../../assets/images/logo-stacked-light.25f6a9cb.svg';

export const LogoHeader = () => {
  return (
    <div className="px-5 dark:bg-slate-900 item-center max-w-screen-2xl mx-auto pt-10 min-h-[150px]">
      <img src={Logo} alt="Dwellsy" className="max-h-28" />
    </div>
  )
}

export default LogoHeader;
