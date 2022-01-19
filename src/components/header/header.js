import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHiden } from "../../redux/cart/cart.selectors";
import { signOut } from "../../redux/user/user.actions";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./Header.styles";


const Header = () => {
  const currentUser = useSelector(selectCurrentUser)
  const hidden = useSelector(selectCartHiden)
  const dispatch = useDispatch()

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => dispatch(signOut())}>
            Sign out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign in </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};



export default Header;
