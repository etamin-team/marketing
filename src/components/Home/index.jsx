import navbar from "../../utils/navbar.jsx";

import {
  Logo,
  NavItem,
  Section,
  Wrapper,
  NavWrapper,
  Dropdown,
  DropdownItem,
  IconImg,
} from "./style.js";

import Title from "../Generics/Title/index.jsx";

import Home from "../Home/index.jsx";
import Button from "../Generics/Button/index.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <NavWrapper>
        <Section>
          <Logo onClick={() => navigate("/home")}>Panda</Logo>
          {navbar.map(({ title, path, id, child }, i) => {
            return (
              <NavItem
                to={!child && path}
                key={i}
                smooth={"true"}
                duration={500}
              >
                <Title size={14} weight={600}>
                  {title}
                </Title>

                {child && (
                  <Dropdown className="dropdown">
                    {child?.map((v, i) => (
                      <DropdownItem to={v.path} key={i}>
                        <Title size={14} weight={600}>
                          {v.title}
                        </Title>
                      </DropdownItem>
                    ))}
                  </Dropdown>
                )}
              </NavItem>
            );
          })}
          <IconImg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 2a8 8 0 1 0 6.32 13.47l4.39 4.39a1 1 0 0 0 1.42-1.42l-4.39-4.39A8 8 0 0 0 10 2zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
          </IconImg>
        </Section>
        <Section>
          <Title size={18} weight={800}>
            +998 99 469 88 91
          </Title>
          <Button
            onClick={() => navigate("/contacts")}
            padding={"13px 40px"}
            bgcolor="#ff2e57"
          >
            <Title size={14} weight={600}>
              Let's Talk
            </Title>
          </Button>
        </Section>{" "}
      </NavWrapper>

      <Home />
    </Wrapper>
  );
};
export default Navbar;
