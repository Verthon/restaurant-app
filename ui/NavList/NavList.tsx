import React from "react";
import Link from "next/link";

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
        isNavActive.active && !isNavActive.firstRender
          ? styles.active
          : styles.list
      }
    >
      <NavItem link="" name="Home" hashlink={false} />
      {links.map((link, index) => (
        <NavItem
          key={index}
          name={link.name}
          link={link.link}
          hashlink={hashlink}
        />
      ))}
      {withDashboard ? (
        <Button link={ROUTES.admin} variant="light" size="small">Dashboard</Button>
      ) : null}
      {children}
    </ul>
  );
};
