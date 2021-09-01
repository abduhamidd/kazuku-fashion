import Footer from '../components/Footer';
import Header from './../components/Header/index';
const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div id="layout">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
