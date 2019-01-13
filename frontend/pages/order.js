import PleaseSignIn from '../components/PleaseSignIn';
import Order from '../components/Order';
// import OrderList from '../components/OrderList';

const OrderPage = props => (
    <div>
        <PleaseSignIn>
            <Order id={props.query.id} />
            {/* <p>This is a single order {props.query.id} </p> */}
        {/* <OrderList /> */}
        </PleaseSignIn>
    </div>
);

export default OrderPage;
