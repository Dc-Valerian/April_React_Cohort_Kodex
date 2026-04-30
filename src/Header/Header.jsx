import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[white] flex items-center justify-between h-20 p-8">
      <div className="text-[black] text-[25px] font-bold">Ada.</div>

      <div className="">
        <ul className="flex items-center gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feature">Feature</Link>
          </li>
          <li>
            <Link to="/react-hooks">Hooks Practices</Link>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">Testimonial</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
