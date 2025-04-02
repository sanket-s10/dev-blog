"use client"

import Link from "next/link";
import { useState } from "react";
import NavOverlay from "./nav-overlay";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div
            data-w-id="7392a2d2-e2cf-5cad-069a-b7a3d9846baa"
            style={{
                transform:
                    "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
            }}
            className="nav_wrapper"
        >
            <div
                data-w-id="17a6340c-761b-7fc0-e914-c76287f98ca6"
                data-animation="default"
                data-collapse="medium"
                data-duration="400"
                data-easing="ease"
                data-easing2="ease"
                role="banner"
                className="navbar w-nav"
            >
                <div className="nav_wrap">
                    {/* Logo Section */}
                    <Link href="/" aria-label="home" className="nav_brand w-nav-brand">
                        {/* <Image
                            src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/6706419fa5621e4e2bdbb1f9_elysian-tennis-academy.svg"
                            alt="Elysian Tennis Academy Logo"
                            className="nav_logo"
                            width={200}
                            height={50}
                            priority
                        />
                        <div
                            className="link_line"
                            style={{
                                transform:
                                    "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d",
                            }}
                        ></div> */}
                        <h5 className="heading-style-h5">
                        Byte / {"{ Brew }"}
                        </h5>
                    </Link>

                    {/* Navigation Menu */}
                    <nav role="navigation" className="nav_menu-items w-nav-menu">
                        <div className="nav_menu-items-inner">
                            <div className="nav_menu-link-wrap is-left">
                                {/* <Link href="/locations" className="nav_link w-inline-block">
                                    <div className="z-index-2">Locations</div>
                                    <div
                                        className="link_line"
                                        style={{
                                            transform:
                                                "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            transformStyle: "preserve-3d",
                                        }}
                                    ></div>
                                </Link> */}

                                <Link href="/blog" className="nav_link w-inline-block">
                                    <div className="z-index-2">Blogs</div>
                                    <div
                                        className="link_line"
                                        style={{
                                            transform:
                                                "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            transformStyle: "preserve-3d",
                                        }}
                                    ></div>
                                </Link>
                            </div>

                            <div
                                id="w-node-_05d0023e-f06c-50f0-7ea3-558eecf113b0-87f98ca6"
                                className="nav_menu-link-wrap"
                            >
                                <Link href="/about-us" className="nav_link w-inline-block">
                                    <div className="z-index-2">About</div>
                                    <div
                                        className="link_line"
                                        style={{
                                            transform:
                                                "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            transformStyle: "preserve-3d",
                                        }}
                                    ></div>
                                </Link>

                                <Link href="/contact" className="nav_link w-inline-block">
                                    <div className="z-index-2">Contact</div>
                                    <div
                                        className="link_line"
                                        style={{
                                            transform:
                                                "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            transformStyle: "preserve-3d",
                                        }}
                                    ></div>
                                </Link>
                            </div>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="nav_button w-nav-button"
                        style={{ WebkitUserSelect: "text" }}
                        aria-label="menu"
                        aria-haspopup="menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div className="nav_button-inner">
                            <div className="nav_button-line is-top"></div>
                            <div className="nav_button-line is-middle"></div>
                            <div className="nav_button-line is-bottom"></div>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className="w-nav-overlay" id="w-nav-overlay-0" style={{ height: menuOpen ? "100vh" : "0px", display: menuOpen ? "block" : "none"}}>
                    <NavOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
