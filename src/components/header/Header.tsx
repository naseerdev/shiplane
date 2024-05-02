import { HeaderImg } from "../../lib/icons/HeaderImg";
import { checkHomeLocation } from "../../lib/utils/utils";
import Navbar from "./Navbar";

const Header = () => {
  console.log("Header", window.location.pathname)
  return (
    <div class="relative">
      {checkHomeLocation() && <HeaderImg />}
      <Navbar />
    </div>
  );
};

export default Header;
