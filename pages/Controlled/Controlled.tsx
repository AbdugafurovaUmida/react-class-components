import { ControlledForm } from '../../src/components/ControlledForm/ControlledForm';
import { Link } from 'react-router-dom';

const Controlled = () => {
  return (
    <>
      <Link to="/">Main</Link>
      <ControlledForm />
    </>
  );
};

export default Controlled;
