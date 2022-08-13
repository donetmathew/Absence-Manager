import React from 'react';
import logo from '../../assets/absence-logo.png';
import './Header.scss';

export const Header = () => {
  return (
    <div className="absences-header flex">
        <div className="absences-header__logo">
            <img className='absences-header__logo--img' src={logo} alt="absence-logo" tabIndex={0} />
        </div>
        <h4 className="absences-header__title flex flex-grow-1 align-items-center">
            Absence Manager
        </h4>
    </div>
  )
}

export default Header;
