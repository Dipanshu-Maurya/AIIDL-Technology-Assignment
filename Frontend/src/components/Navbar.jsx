import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#101C3D] text-xl font-bold text-white">
            A<span className="text-orange-400">.</span>
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-[#101C3D]">
              AIIDL
            </h1>
            <p className="text-[10px] font-medium uppercase tracking-[2px] text-slate-500">
              Technologies
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-slate-600 hover:text-[#101C3D]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#101C3D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500 md:flex"
        >
          Get in Touch
          <ArrowUpRight size={17} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="rounded-lg p-2 text-[#101C3D] hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-orange-500 md:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? "text-orange-500" : "text-slate-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#101C3D] px-5 py-3 font-semibold text-white transition hover:bg-orange-500"
            >
              Get in Touch
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
