import React from "react";
import { links } from "./root.helper.js";
import { Link, BrowserRouter } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <div className="h-16 top-0 flex items-center justify-around px-6 bg-primary text-white">
        <div className="flex items-center justify-between">
          {links.map((link) => {
            return (
              <Link key={link.href} className="p-6" to={link.href}>
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </BrowserRouter>
  );
}
