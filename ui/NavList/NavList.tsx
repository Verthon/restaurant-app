import React from "react";
import Link from "next/link";
import cx from "classnames"

import { NavItem } from "../NavItem/NavItem";
import { Button } from "ui/Button/Button";

import styles from "./NavList.module.scss";
import { ROUTES } from "constants/routes";

type Link = {
  name: string;
  link: string;
};

type Props = {
  links: Array<Link>;
  hashlink: boolean;
  withDashboard?: boolean;
  admin?: boolean;
  isNavActive: {
    firstRender: boolean;
    active: boolean;
  };
  children?: React.ReactNode;
};

export const NavList = ({
  isNavActive,
  links,
  withDashboard,
  hashlink,
  children,
}: Props) => {
  return (
    <ul
      className={
        cx(isNavActive.active && !isNavActive.firstRender
          ? styles.active
          : styles.list, styles.animated)
      }
    >
      <NavItem>Home</NavItem>
      {links.map((link, index) => (
        <NavItem
          key={index}
          path={link.link}
          hashlink={hashlink}
        >
          {link.name}
        </NavItem>
      ))}
      {withDashboard ? (
        <NavItem path={ROUTES.admin}><Button variant="light" size="small">Dashboard</Button></NavItem>
      ) : null}
      {children}
    </ul>
  );
};
