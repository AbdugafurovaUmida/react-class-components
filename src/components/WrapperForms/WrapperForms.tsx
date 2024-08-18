import { useAppSelector } from '../../../hooks/useAppSelector';
import { Card } from '../Card/Card';
import { getControllForm, getFormsIdentificator, getUnControllForm } from '../../../utils/forms/getForms';
import { Identificator } from '../../../store/slices/formSlice';
import './WrapperForms.css';

const WrapperForms = () => {
  const controllForm = useAppSelector(getControllForm);
  const unControlFrom = useAppSelector(getUnControllForm);
  const lastFormId = useAppSelector(getFormsIdentificator);

  return (
    <div className="cards-wrapper">
      <div className="cards">
        {controllForm.length > 0 && (
          <div className="controlled-card-content">
            <h2 className="title">Controlled Forms</h2>
            {[...controllForm].reverse().map((form, i) => {
              return <Card key={i} {...form} active={lastFormId === Identificator.controlled && i === 0} />;
            })}
          </div>
        )}

        {unControlFrom.length > 0 && (
          <div className="uncontrolled-card-content">
            <h2 className="title">Uncontrolled Forms</h2>

            {[...unControlFrom].reverse().map((form, i) => {
              return <Card key={i} {...form} active={lastFormId === Identificator.controlled && i === 0} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default WrapperForms;
