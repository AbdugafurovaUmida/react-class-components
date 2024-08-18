import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
