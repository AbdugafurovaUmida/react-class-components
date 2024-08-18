import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: FC = (): JSX.Element => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/controlled">Controlled Form</Link>
          </li>
          <li>
            <Link to="/uncontrolled">Uncontrolled Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
