import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const REMOVE_FROM_CART_MUTATION = gql`
    mutation removeFromCart($id: ID!) {
        removeFromCart(id: $id) {
        id
        }
    }
`;

const BigButton = styled.button`
    font-size: 3rem;
    background: none;
    border: 0;
    &:hover {
        color: ${props => props.theme.red};
        cursor: pointer;
    }
`;

class RemoveFromCart extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
    };
    // This gets called as soon as we get a response back from the server after a mutation has been performed
    //otherwise, when we delete an item, there would be a pause before the item is removed
    update = (cache, payload) => {
        // 1. first read the cache (this is the apollo cache)
        const data = cache.readQuery({ query: CURRENT_USER_QUERY });
        // 2. remove that item from the cart
        const cartItemId = payload.data.removeFromCart.id;
        data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);
        // 3. write it back to the cache
        cache.writeQuery({ query: CURRENT_USER_QUERY, data });
    };
    render() {
        return (
        <Mutation
            mutation={REMOVE_FROM_CART_MUTATION}
            variables={{ id: this.props.id }}
            update={this.update}
            //when we delete an item, it's going to optimistically immediately reply with this information
            //this also allows for the instant UI update
            optimisticResponse={{
                __typename: 'Mutation',
                removeFromCart: {
                    __typename: 'CartItem',
                    id: this.props.id,
                },
            }}
        >
            {(removeFromCart, { loading, error }) => (
            <BigButton
                disabled={loading}
                onClick={() => {
                    removeFromCart().catch(error => alert(error.message));
                }}
                title="Delete Item"
            >
                &times;
            </BigButton>
            )}
        </Mutation>
        );
    }
}

export default RemoveFromCart;
export { REMOVE_FROM_CART_MUTATION };
