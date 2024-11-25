import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";
import s from "../asset/UrbanKart.png";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className=" shadow-md">
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        {/* Logo of Navbar*/}
        <NavbarBrand >
          <img src={s} alt="UrbanKart" className="h-10 w-50" />
          {/* <p className="font-bold text-inherit">RBAC</p> */}

        </NavbarBrand>
      </NavbarContent>


       {/* NavbarContent is used to align the content of the Navbar */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link  path="/">
            All
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link path="/" aria-current="page">
            Members
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link  path="/">
            Customers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" >
        <NavbarItem>
          <Button as={Link} color="" href="/" variant="">
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  );
}
