/* eslint-disable import/no-extraneous-dependencies */
import { BsFillSunFill } from 'react-icons/bs';

function Logo() {
  return (
    <div className="text-theme-orange-100 text-3xl font-semibold py-0 uppercase flex justify-start items-center">
      <BsFillSunFill className="mr-2" />
      <span>Solar</span>
    </div>
  );
}
export default Logo;
