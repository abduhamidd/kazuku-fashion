import './Header.module.scss';
import {useRouter} from 'next/router';
import Logo from '../Logo';
import BurgerMenu from './BurgerMenu';
import CustomLink from './Link/index';
const Header = () => {
  const __router = useRouter();
  function isRoute(route) {
    if (__router.pathname === route) {
      return 'active';
    } else {
      return 'disactive';
    }
  }
  return (
    <>
      <header>
        <div className="header">
          <Logo />
          <BurgerMenu />
          <nav>
            <ul>
              <CustomLink
                text="Team"
                href="/team "
                className={isRoute('/team')}
              />
              <CustomLink
                text="About"
                href="/about "
                className={isRoute('/about')}
              />
              <CustomLink
                text="Collections"
                href="/ "
                className={isRoute('/')}
              />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
