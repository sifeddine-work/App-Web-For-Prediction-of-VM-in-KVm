import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
//import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center justify-content-between w-100">{/*justify-content-between */}
          {/* Logo Wrapper */}
          <div className="col-md-2 col-sm-4 d-flex align-items-center"> {/* col-md-3*/}
            <Link to="/" className="d-flex align-items-center logo">
              <img src={logo} alt="logo" className="logo" />
              <span className="ml-2">HOTASH</span>
            </Link>
          </div>

          {/* Menu Button */}
          <div className="col-md-auto d-flex align-items-center justify-content-end">
            <Button className="rounded-circle">
              <MdMenuOpen />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
