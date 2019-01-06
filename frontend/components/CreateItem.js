import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';


const CREATE_ITEM_MUTATION = gql`
    mutation CREATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $price: Int!
        $image: String
        $largeImage: String
    ) {
        createItem(
            title: $title
            description: $description
            price: $price
            image: $image
            largeImage: $largeImage
        ) {
            id
        }
    }
`;

class CreateItem extends Component {
    //state is very helpful when you just want to contain data locally
    //before we send all our data to our graphql api, we need to store it somewhere
    state = {
        title: 'Cool shoes',
        description: 'This is a descriptions',
        image: '',
        largeImage: '',
        price: 1000,
    }
    handleChange = (e) => {
        const { name, type, value } = e.target;
        //if the value is a number, we want to coerce it from string to float
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name]: val })
    }
    uploadFile = async e => {
        console.log('uploading file...');
        //pull the files out of the selection
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'sickfits');

        const res = await fetch('https://api.cloudinary.com/v1_1/codebreaker/image/upload', {
            method: 'POST',
            body: data,
        });

        const file = await res.json();
        console.log(file);
        this.setState({
            image: file.secure_url,
            largeImage: file.eager[0].secure_url
        });
    };
    render() {
        return (
            <Mutation
            mutation={CREATE_ITEM_MUTATION}
            variables ={this.state}>
            {(createItem, { loading, error, called, data })=> (
                //this is an 'implicit return'
            <Form onSubmit={async e => {
                //prevents the form from submitting
                e.preventDefault();
                //calls the mutation
                const res = await createItem();
                console.log(res);
                //change user to single item page
                Router.push({
                    pathname: '/item',
                    query: { id: res.data.createItem.id }
                })
            }}>
                {/* if there is any error, the component below will render out */}
                <Error error={error}/>
                <label htmlFor="file">
                    Image
                    <input
                        type="file"
                        id="file"
                        name="file"
                        placeholder="Upload an image"
                        required
                        onChange={this.uploadFile}
                    />
                    {this.state.image && <img width="200" src={this.state.image} alt="Upload Preview"/>}
                </label>
                {/* aria-busy is for accessibility */}
                {/* note: apollo flips the loading to true or false for us */}
                <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="title">
                        Title
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title"
                            required
                            value={this.state.title}
                            onChange={this.handleChange}
                            />
                    </label>
                    <label htmlFor="price">
                        Price
                        <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Price"
                            required
                            value={this.state.price}
                            onChange={this.handleChange}
                            />
                    </label>
                    <label htmlFor="description">
                        Description
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Enter a description..."
                            required
                            value={this.state.description}
                            onChange={this.handleChange}
                            />
                    </label>
                    <button type="submit">Submit</button>
                </fieldset>
            </Form>
            )}
            </Mutation>
        );
    }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };