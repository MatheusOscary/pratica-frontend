import React, { useState } from 'react';
import logoPosColor from '../images/logoPosColor.png';
import logoNegative from '../images/logoNegative.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './login.module.css';

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  
  const handleLoginClick = () => {
    onLogin();
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={'row ' + styles['login']}>
      <div className={'col-md-3 ' + styles['lateral-image']}>
        <img src={logoNegative} alt="" className={styles['logo-negative']} />
      </div>
      <div className={'col-md-8'}>
        <div className={'col-md-12 d-flex align-items-center flex-column'}>
          <div className={''}>
            <div className={styles['logo-PosColor']}>
              <img src={logoPosColor} alt="" />
            </div>
            <div className={styles['titulo-painel']}>
              <p>Acesse o Painel de Monitoramento</p>
            </div>
            <div className={styles['input-label']}>
              <label>Email:</label>
              <input type="email" />
            </div>
            <div className={styles['input-label']}>
              <label>Senha:</label>
              <div className={styles['password-input-container']}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className={styles['show-button']}
                  onClick={handleShowPasswordClick}
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
            </div>
            <div>
              <button
                className={styles['login-button'] + ' button-anm'}
                onClick={handleLoginClick}
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
