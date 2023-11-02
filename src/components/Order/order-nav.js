import 'bootstrap/dist/css/bootstrap.min.css';
import logoNegative from '../images/logoNegative.png';
import styles from './order-nav.module.css';

const Nav = ({onLogout}) => {
  const handleLogoutClick = () => {
    onLogout();
  };
  return (
    <nav className={"navbar navbar-expand-lg " + styles['bg-nav']}>
      <div className="container-fluid">
        <div className={"navbar-brand " + styles['text-nav']} href="#">
          <img src={logoNegative} alt="" width="300px" height="100px" />
          MONITORAMENTO DE PEDIDOS
        </div>
        <button className={" px-5 py-2 button-anm "+ styles['btn-nav']} onClick={handleLogoutClick}>SAIR</button>
      </div>
    </nav>
  );
};

export default Nav;
