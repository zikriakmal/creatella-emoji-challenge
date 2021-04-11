import React from 'react'
import './header.scss';

const Header = ({title=''}) =>
{
  return (
    <div className='header-wrapper'>
      <h1>
        {title}
      </h1>
    </div>
  );
}


export default Header;