const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/about", text: "About Us" },
  { id: 3, url: "/team", text: "Team" },
  { id: 4, url: "/process", text: "Process" },
  { id: 5, url: "/pricing", text: "Pricing" },
  { id: 6, url: "/blog", text: "Blog" },
  { id: 7, url: "/contact", text: "Contact Us" },
];
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li
            key={id}
            className="hover:bg-green70 hover:text-black text-white rounded-md"
          >
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
