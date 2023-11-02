import Nav from "./order-nav";
import Item from "./order-item";
import Total from "./order-total";
import Status from "./order-status";
import Colorstatus from "./order-color-status";
import styles from './order.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Order = ({onLogout}) =>{
    
    return(
        <div className={styles['order']}>
            <Nav onLogout={onLogout}/>
            <div className={'m-4'}>
                <div className={'row'}>
                    <div className={'col-md-7 align-items-stretch'}>
                        <Status />
                    </div>
                    <div className={'col-md-5 d-flex align-items-stretch justify-content-end'}>
                        <Total />
                    </div>
                </div>
            </div>
            <div className={'m-4'}>
                <div className={'col-md-12'}>
                    <Item />
                </div>
            </div>
        </div>
    )
}
export default Order