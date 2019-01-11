import React from 'react';
import Downshift, { resetIdCounter } from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_ITEMS_QUERY = gql`
    query SEARCH_ITEMS_QUERY($searchTerm: String!) {
        # the OR is provided by Prisma
        items(where: { OR: [{ title_contains: $searchTerm }, { description_contains: $searchTerm }] }) {
            id
            image
            title
        }
    }
`;

// function routeToItem(item) {
//     Router.push({
//         pathname: '/item',
//         query: {
//         id: item.id,
//         },
//     });
// }

class AutoComplete extends React.Component {
    state = {
        items: [],
        loading: false,
    };
    // onChange = async (e, client) => {
    //     this.setState({ loading: true })
    //     const res = await client.query({
    //         query: SEARCH_ITEMS_QUERY,
    //         variables: { searchTerm: e.target.value },
    //     })
    //     this.setState({
    //         items: res.data.items,
    //         loading: false,
    //     })
    // }
    //debounce makes it so that if you type several letters very fast, it doesn't send multiple queries per second
    onChange = debounce(async (e, client) => {
        console.log('Searching...');
        // turn loading on
        this.setState({ loading: true });
        // Manually query apollo client
        const res = await client.query({
        query: SEARCH_ITEMS_QUERY,
        variables: { searchTerm: e.target.value },
        });
        this.setState({
        items: res.data.items,
        loading: false,
        });
    }, 350);
    render(){
        return (
            <SearchStyles>
                <div>
                    <ApolloConsumer>
                        {client => (
                            <input
                                type="search"
                                onChange={(e) => {
                                    e.persist();
                                    this.onChange(e, client);
                                }}
                                // {...getInputProps({
                                //     type: 'search',
                                //     placeholder: 'Search For An Item',
                                //     id: 'search',
                                //     className: this.state.loading ? 'loading' : '',
                                //     onChange: e => {
                                //         e.persist();
                                //         this.onChange(e, client);
                                //     },
                                // })}
                            />
                            )}
                    </ApolloConsumer>
                    <DropDown>
                        {this.state.items.map(item => (
                            <DropDownItem key={item.id}>
                                <img width="50" src={item.image} alt= {item.title} />
                                {item.title}
                            </DropDownItem>
                        ))}
                    </DropDown>
                </div>
            </SearchStyles>
        )
    }
}

// class AutoComplete extends React.Component {
//     state = {
//         items: [],
//         loading: false,
//     };
//     onChange = debounce(async (e, client) => {
//         console.log('Searching...');
//         // turn loading on
//         this.setState({ loading: true });
//         // Manually query apollo client
//         const res = await client.query({
//         query: SEARCH_ITEMS_QUERY,
//         variables: { searchTerm: e.target.value },
//         });
//         this.setState({
//         items: res.data.items,
//         loading: false,
//         });
//     }, 350);
//     render() {
//     resetIdCounter();
//     return (
//         <SearchStyles>
//             <Downshift onChange={routeToItem} itemToString={item => (item === null ? '' : item.title)}>
//             {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
//                 <div>
//                 <ApolloConsumer>
//                     {client => (
//                     <input
//                         {...getInputProps({
//                         type: 'search',
//                         placeholder: 'Search For An Item',
//                         id: 'search',
//                         className: this.state.loading ? 'loading' : '',
//                         onChange: e => {
//                             e.persist();
//                             this.onChange(e, client);
//                         },
//                         })}
//                     />
//                     )}
//                 </ApolloConsumer>
//                 {isOpen && (
//                     <DropDown>
//                     {this.state.items.map((item, index) => (
//                         <DropDownItem
//                         {...getItemProps({ item })}
//                         key={item.id}
//                         highlighted={index === highlightedIndex}
//                         >
//                         <img width="50" src={item.image} alt={item.title} />
//                         {item.title}
//                         </DropDownItem>
//                     ))}
//                     {!this.state.items.length &&
//                         !this.state.loading && <DropDownItem> Nothing Found {inputValue}</DropDownItem>}
//                     </DropDown>
//                 )}
//                 </div>
//             )}
//             </Downshift>
//         </SearchStyles>
//         );
//     }
// }

export default AutoComplete;
