import React from "react";
import Style from "./PageSidebar.styles";
import { GophieLogo } from "../../utils/icons";

const PageSidebar = () => {
  let pathname = window.location.pathname;
  return (
    <Style.Sidebar>
      <Style.Sidebar__Logo>
        <GophieLogo />
      </Style.Sidebar__Logo>
      <Style.Sidebar__Nav>
        <Style.Sidebar__NavListItem>
          <Style.Sidebar__NavLink
            className={`${pathname.match("/Server1") ? "active" : ""}`}
            to={"/Server1"}
          >
            Server1 <small>(Movies)</small>
          </Style.Sidebar__NavLink>
        </Style.Sidebar__NavListItem>

        <Style.Sidebar__NavListItem>
          <Style.Sidebar__NavLink
            className={`${pathname.match("/Server2") ? "active" : ""}`}
            to={"/Server2"}
          >
            Server2 <small>(Anime)</small>
          </Style.Sidebar__NavLink>
        </Style.Sidebar__NavListItem>

        <Style.Sidebar__NavListItem>
          <Style.Sidebar__NavLink
            className={`${pathname.match("/Server3") ? "active" : ""}`}
            to={"/Server3"}
          >
            Server3 <small>(HD)</small>
          </Style.Sidebar__NavLink>
        </Style.Sidebar__NavListItem>

        <Style.Sidebar__NavListItem>
          <Style.Sidebar__NavLink
            className={`${pathname.match("/Server4") ? "active" : ""}`}
            to={"/Server4"}
          >
            Server4 <small>(Series)</small>
          </Style.Sidebar__NavLink>
        </Style.Sidebar__NavListItem>

        <Style.Sidebar__NavListItem>
          <Style.Sidebar__NavLink
            className={`${pathname.match("/Server5") ? "active" : ""}`}
            to={"/Server5"}
          >
            Server5 <small>(Movies)</small>
          </Style.Sidebar__NavLink>
        </Style.Sidebar__NavListItem>
      </Style.Sidebar__Nav>

      <Style.Sidebar__Footer>
        <h3>
          Gophie.cam —{" "}
          <small>
            {" "}
            <Style.Sidebar__FooterLink to={"/terms"}>Terms</Style.Sidebar__FooterLink>
          </small>
        </h3>
        <p>Copyright © Gophie 2020. All Right Reserved</p>
      </Style.Sidebar__Footer>
    </Style.Sidebar>
  );
};

export default PageSidebar;
