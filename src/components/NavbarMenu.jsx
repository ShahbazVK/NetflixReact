import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { IoIosNotificationsOutline, IoIosSearch } from 'react-icons/io'

export function NavbarMenu() {
    const dropdownImg = () => {
        return (
            <div style={{ display: 'inline' }}>
                <img style={{ display: 'inline', borderRadius: '4px' }} width={30} src="https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg" alt="dropdown-title-image" />
            </div>
        )
    }
    return (
        <div className='bg-stone-900 pt-2.5 pb-2.5'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Link className='text-red-600 font-extrabold text-xl mr-2 hover:text-red-800'>NETFLIX</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link>
                                <Nav.Link className='text-white'>Home</Nav.Link>
                            </Link>
                            <Link>
                                <Nav.Link className='text-white'>Tv shows</Nav.Link>
                            </Link>
                            <Link>
                                <Nav.Link className='text-white'>Movies</Nav.Link>
                            </Link>
                            <Link>
                                <Nav.Link className='text-white'>News and Popular</Nav.Link>
                            </Link>
                            <Link>
                                <Nav.Link className='text-white'>My List</Nav.Link>
                            </Link>
                            <Link>
                                <Nav.Link className='text-white'>Browse by languages</Nav.Link>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link>
                                <Nav.Link className='hello text-white'><IoIosSearch fontSize={25} /></Nav.Link>
                            </Link>
                            <Link>
                                <Nav.Link className='text-white'>Kids</Nav.Link>
                            </Link>
                            <Link>
                                <Nav.Link className='text-white' style={{ paddingTop: '8px' }}><IoIosNotificationsOutline style={{ fontSize: '24px' }} /></Nav.Link>
                            </Link>

                            <NavDropdown title={dropdownImg()} id="collasible-nav-dropdown">
                                <Link>
                                    <NavDropdown.Item >Manage Profile</NavDropdown.Item></Link>
                                <Link>
                                    <NavDropdown.Item >Exit Profile</NavDropdown.Item>
                                </Link>
                                <Link>
                                    <NavDropdown.Item >Account</NavDropdown.Item>
                                </Link>
                                <Link>
                                    <NavDropdown.Item >Help Center</NavDropdown.Item>
                                </Link>

                                <NavDropdown.Divider />
                                <Link>
                                    <NavDropdown.Item >
                                        Sign Out
                                    </NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}
