import { ButtonStyled, ButtonStyledActive } from "./styles";

const Button = ({ children, active }) => {
  const activated = active;
  if (activated) {
    return <ButtonStyledActive>{children}</ButtonStyledActive>;
  } else {
    return <ButtonStyled>{children}</ButtonStyled>;
  }
};

export default Button;
