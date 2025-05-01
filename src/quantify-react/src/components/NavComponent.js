import React from 'react'
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
  } from "@heroui/react";
import {ReactComponent as PhGear} from '../assets/phosphor-icons/PhGear.svg';

function NavComponent(props) {

    return (
        <Navbar isBordered isBlurred='false'>
            <NavbarBrand>
                <Link href='#'>
                    Hello
                </Link>
            </NavbarBrand>
            <NavbarContent justify='end'>
                <NavbarItem>
                    <Button isIconOnly variant='light'>
                        <PhGear width='24px' height='24px'/>
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default NavComponent;