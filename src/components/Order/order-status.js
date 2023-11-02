import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Colorstatus from './order-color-status';
const Status = () => {
    const [total_status, settotal_status] = useState([]);
    
      useEffect(() => {
        axios.get('http://localhost:3000/pedidos/resumoStatus')
          .then((response) => {
            settotal_status(response.data);
          })
          .catch((error) => {
            console.error('Algo deu errado!:', error);
          });
      }, []);
  return (
    <div className="box-container text-center bg-white px-5 py-2 shadow-line">
      <div className="box-title h5">Status dos Pedidos</div>
      <div className="row justify-content-center">
        <div className="col-6 col-md-3 col-lg-2 box-item">
          <Colorstatus color="#FFCE00" weight="400" size="32px">{total_status.qtdStatusProcessando}</Colorstatus>
          <div><Colorstatus color="#4F4F4F" weight="400" size="20px">Processando</Colorstatus></div>
        </div>
        <div className="col-6 col-md-3 col-lg-2 box-item">
          <Colorstatus color="#2993CE" weight="400" size="32px">{total_status.qtdStatusPendente}</Colorstatus>
          <div><Colorstatus color="#4F4F4F" weight="400" size="20px">Pendente</Colorstatus></div>
        </div>
        <div className="col-6 col-md-3 col-lg-2 box-item">
          <Colorstatus color="#005A64" weight="400" size="32px">{total_status.qtdStatusAprovado}</Colorstatus>
          <div><Colorstatus color="#4F4F4F" weight="400" size="20px">Aprovado</Colorstatus></div>
        </div>
        <div className="col-6 col-md-3 col-lg-2 box-item">
          <Colorstatus color="#C73939" weight="400" size="32px">{total_status.qtdStatusCancelado}</Colorstatus>
          <div><Colorstatus color="#4F4F4F" weight="400" size="20px">Cancelado</Colorstatus></div>
        </div>
        <div className="col-6 col-md-3 col-lg-2 box-item">
          <Colorstatus color="#000000" weight="400" size="32px">{total_status.qtdTotalPedidos}</Colorstatus>
          <div><Colorstatus color="#4F4F4F" weight="400" size="20px">Total</Colorstatus></div>
        </div>
      </div>
    </div>
  );
};

export default Status;
