import logo from "../images/caniflag_logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white px-6 py-3 flex items-center justify-between">
      
      <div className="flex items-center">
        <Link to="/" className="flex items-center" reloadDocument>
        <img src={logo} alt="CanIFlag logo" width={150} height={50} />
        <span className="text-4xl font-bold">
          CanI<span className="text-red-400">Flag</span>
          <span className="text-yellow-400">?</span>
        </span>
        </Link>
      </div>

    </header>
  )
}

export default Header;