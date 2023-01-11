import { CgTerminal } from "react-icons/cg";
import { BsCartCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import {
  Logo,
  SearchBar,
  CartLogo,
  NavBarContainer,
  NavBarContent,
} from "./styleNavBar";

const NavBar = ({ shoppingCart }) => {
  return (
    <NavBarContainer>
      <NavBarContent>
        <Logo to={"/"}>
          <CgTerminal />
          <h1>Terminal Shop</h1>
        </Logo>
        <SearchBar>
          <input type="text" />
          <BiSearchAlt />
        </SearchBar>
        <CartLogo to={"/cart"}>
          <BsCartCheck />
          <h1>{shoppingCart.totalItem}</h1>
        </CartLogo>
      </NavBarContent>
    </NavBarContainer>
  );
};

export default NavBar;
