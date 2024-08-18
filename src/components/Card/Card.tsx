import { FC } from 'react';
import { ConvertedFormInputs } from '../../../types/formTypes';
import './Card.css';

interface CardProps extends Omit<ConvertedFormInputs, 'confirm' | 'terms'> {
  active?: boolean;
}

export const Card: FC<CardProps> = props => {
  const { name, email, age, gender, country, active, file, password } = props;

  return (
    <div className={active ? `card ${active}` : `card`}>
      <div className="item">
        <span className="item__image_wrap">Image:</span>
        <img className="item__image" src={file} />
      </div>

      <div className="item">
        <span className="item__name">Name:</span>
        <p>{name}</p>
      </div>

      <div className="item">
        <span className="item__description">Email:</span>
        <p>{email}</p>
      </div>

      <div className="item">
        <span className="item__pass">Password:</span>
        <p>{password}</p>
      </div>

      <div className="item">
        <span className="item__gender">Gender:</span>
        <p>{gender}</p>
      </div>

      <div className="item">
        <span className="item__age">Age:</span>
        <p>{age}</p>
      </div>

      <div className="item">
        <span className="item__country">Country:</span>
        <p>{country}</p>
      </div>
    </div>
  );
};
