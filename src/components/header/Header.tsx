import { HeaderImg } from "../../lib/icons/HeaderImg";
import { checkStartTrialLocation } from "../../lib/utils/utils";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div class="relative">
      {!checkStartTrialLocation() && <HeaderImg />}
      <Navbar />
    </div>
  );
};

export default Header;
