import { UnControlledForm } from '../../src/components/UnControlledForm/UnControlledForm';
import { Link } from 'react-router-dom';

const UnControlled = () => {
  return (
    <>
      <Link to="/">Main</Link>
      <UnControlledForm />
    </>
  );
};

export default UnControlled;
