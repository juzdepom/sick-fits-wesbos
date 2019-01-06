import React from 'react';
import UpdateItem from '../components/UpdateItem';


//note: this is a stateless component, not a react component
const Sell = ({query}) => (
    <div>
        <UpdateItem id={query.id} />
    </div>
)

export default Sell;