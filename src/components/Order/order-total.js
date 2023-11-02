import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Colorstatus from './order-color-status';
const Total = () => {
  const [total_res, settotal] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/pedidos/totalVendas')
      .then((response) => {
        settotal(response.data);
      })
      .catch((error) => {
        console.error('Algo deu errado!:', error);
      });
  }, []);

  return (
    <div className={'box-container text-center bg-white px-5 py-2 col-md-10 shadow-line'}>
      <div className={'box-title'}>Total de vendas</div>
      <div className={'d-flex justify-content-center text-center '}>
        <div className={'box-item'}>
          <Colorstatus color="black" weight="400" size="38px">R${total_res.totalVendas}</Colorstatus>
        </div>
      </div>
    </div>
  );
}

export default Total;
