import Link from "next/link";
import { useEffect, useState } from "react";

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavOverlay: React.FC<NavOverlayProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 400); // Matches transition time
    }
  }, [isOpen]);

  if (!isVisible) return null; // Hide when closed

  return (
    <nav
      role="navigation"
      style={{
        transition: "all 400ms ease-in-out",
        transform: isOpen ? "translateY(0px)" : "translateY(-100%)",
        display: isOpen ? "block" : "none" 
      }}
      className={`nav_menu-items w-nav-menu`}
      aria-hidden={!isOpen}
      aria-expanded={isOpen}
      data-nav-menu-open={isOpen}
    >
      <div className="nav_menu-items-inner">
        <div className="nav_menu-link-wrap is-left">
          <Link href="/fitness" className="nav_link w-inline-block">
            <div className="z-index-2">Blogs</div>
            <div className="link_line"></div>
          </Link>
        </div>

        <div
          id="w-node-_05d0023e-f06c-50f0-7ea3-558eecf113b0-87f98ca6"
          className="nav_menu-link-wrap"
        >
          <Link href="/about-us" className="nav_link w-inline-block">
            <div className="z-index-2">About</div>
            <div className="link_line"></div>
          </Link>

          <Link href="/contact" className="nav_link w-inline-block">
            <div className="z-index-2">Contact</div>
            <div className="link_line"></div>
          </Link>
        </div>
      </div>

      {/* Close overlay when clicking outside */}
      <div className="nav_overlay-backdrop" onClick={onClose}></div>
    </nav>
  );
};

export default NavOverlay;
