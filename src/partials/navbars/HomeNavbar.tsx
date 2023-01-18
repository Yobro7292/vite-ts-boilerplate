import Logo from '../../components/common/Logo';
import NavbarEndButtons from '../../components/NavbarEndButtons';
import NavbarLinks from '../../components/NavbarLinks';

function HomeNavbar() {
  return (
    <div className="w-full flex justify-center items-center bg-theme-black-100 py-[30px]">
      <div className="w-3/4 grid grid-cols-3 gap-1 justify-between items-center">
        <Logo />
        <NavbarLinks />
        <NavbarEndButtons />
      </div>
    </div>
  );
}

export default HomeNavbar;
