import './Header.css';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Logo />
      <Navigation isOpen={isOpen} handleClick={handleBurgerClick} />
      <BurgerMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleClick={handleBurgerClick}
      />
    </header>
  );
};

export default Header;
