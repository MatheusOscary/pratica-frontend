import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './order-item.module.css';
import Colorstatus from './order-color-status';

const Item = () => {
    const [pedidos, setpedidos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/pedidos')
        .then((response) => {
            setpedidos(response.data);
        })
        .catch((error) => {
            console.error('Algo deu errado!:', error);
        });
    }, []);
    const StatusColor = (status) => {
        switch (status) {
            case 'PROCESSANDO':
                return '#FFCE00'; 
            case 'PENDENTE':
                return '#2993CE'; 
            case 'APROVADO':
                return '#005A64'; 
            case 'CANCELADO':
                return '#C73939'; 
            default:
                return 'black'; 
        }
    };
    return (
        <div className="row">
            {pedidos.map((pedido, index) => (
                <div className="col-6 col-md-4 col-lg-3 mb-3" key={index}>
                    <div className="bg-white shadow-line card-container">
                        <div className={"px-3 py-3"}>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <Colorstatus color="#005A64" weight="400" size="24px">Pedido</Colorstatus>
                                </div>
                                <div className="col-md-6 " align="right">
                                    <button className={styles['btn-order'] + ' button-anm'}>ACESSAR</button>
                                </div>
                            </div>
                            <div className={"row align-items-center"}>
                                <div className={"col-md-6 mt-3"}>
                                    <Colorstatus color="black" weight="400" size="12px">Numero</Colorstatus>
                                </div>
                                <div className={"col-md-6 mt-3"}>
                                    <Colorstatus color="black" weight="700" size="14px">{pedido.numero}</Colorstatus>
                                </div>
                                <div className={"col-md-12"}>
                                    <div className={styles['border-div']}></div>
                                </div>
                            </div>
                            <div className={"row align-items-center"}>
                                <div className={"col-md-6 mt-3"}>
                                    <Colorstatus color="black" weight="400" size="12px">Valor</Colorstatus>
                                </div>
                                <div className={"col-md-6 mt-3"}>
                                    <Colorstatus color="black" weight="700" size="14px">R$ {pedido.valor.toFixed(2)}</Colorstatus>
                                </div>
                                <div className={"col-md-12"}>
                                    <div className={styles['border-div']}></div>
                                </div>
                            </div>
                            <div className={"row align-items-center"}>
                                <div className={"col-md-6 mt-3"}>
                                    <Colorstatus color="black" weight="400" size="12px">Status</Colorstatus>
                                </div>
                                <div className={"col-md-6 mt-3"}>
                                    <Colorstatus color={StatusColor(pedido.status)} weight="700" size="14px">{pedido.status}</Colorstatus>
                                </div>
                                <div className={"col-md-12"}>
                                    <div className={styles['border-div']}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Item;
