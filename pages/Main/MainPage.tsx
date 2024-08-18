import Header from '../../src/components/Header/Header';
import WrapperForms from '../../src/components/WrapperForms/WrapperForms';

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="cards-wrapper">
        <WrapperForms />
      </div>
    </>
  );
};

export default MainPage;
