import React, { useState } from "react";
import { Outlet, Link } from 'react-router';
import "./App.scss";
import ContactListItem from "./ContactListItem.tsx";

export default function App() {
  const [programmer, setPrg] = useState(window.location.hash == '#/programmer');

  return (
    <div className="App">
      <div className="Section Contacts">
        <div className="Background">
          <div className="Blackdrop"></div>
        </div>
        <div className="Photo"></div>
        <div className="Information">
          <div className="Name text-gray-1">Yevhen Kliuchko</div>
          <div className="Profession text-gray-2">
            <span className={`Item ${!programmer ? 'selected' : 'unselected'}`} onClick={() => setPrg(false)}>
              <Link to='/designer'>Game Designer</Link>
            </span>
            <span className={`Item ${programmer ? 'selected' : 'unselected'}`} onClick={() => setPrg(true)}>
              <Link to='/programmer'>Programmer</Link>
            </span>
          </div>
          <div className="Description text-gray-3">
            {
              programmer ? 'Web applications development.'
                : 'Technical design of systems and gameplay using Unreal Engine.'
            }
          </div>
        </div>
        <div className="List">
          <ContactListItem linkUrl="https://www.youtube.com/@%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9%D0%9A%D0%BB%D1%8E%D1%87%D0%BA%D0%BE-%D1%8A5%D1%83">
            <div className="ContactIcon Youtube"></div>
          </ContactListItem>
          <ContactListItem linkUrl="https://www.linkedin.com/in/elumine/">
            <div className="ContactIcon Linkedin"></div>
          </ContactListItem>
          <ContactListItem linkUrl="https://www.artstation.com/elumine">
            <div className="ContactIcon Artstation"></div>
          </ContactListItem>
          <ContactListItem linkUrl="https://github.com/elumine">
            <div className="ContactIcon Github"></div>
          </ContactListItem>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
