import { Link } from 'react-router-dom';

function NavbarEndButtons() {
  return (
    <div className=" flex justify-end items-center">
      <Link to="/">
        <button
          className="w-max bg-theme-orange-100 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          More Info
        </button>
      </Link>
    </div>
  );
}
export default NavbarEndButtons;
