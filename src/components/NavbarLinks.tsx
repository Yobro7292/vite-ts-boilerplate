/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';

function NavbarLinks() {
  return (
    <div className="flex justify-evenly items-center text-white text-md font-semibold py-0">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/">
        <span>About</span>
      </Link>
      <Link to="/">
        <span>Blog</span>
      </Link>
    </div>
  );
}
export default NavbarLinks;
