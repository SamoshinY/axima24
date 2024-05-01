import './Logo.css';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo-wrap">
        <img className="logo" src={headerLogo} alt="Логотип проекта" />
      </div>
    </Link>
  );
};

export default Logo;
