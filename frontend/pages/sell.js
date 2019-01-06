import React from 'react';
import CreateItem from '../components/CreateItem';
import PleaseSignIn from '../components/PleaseSignIn';


const Sell = props => (
    <PleaseSignIn>
        <div>
            <CreateItem />
        </div>
    </PleaseSignIn>
)

export default Sell;