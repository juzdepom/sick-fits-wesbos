import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

//you can find information on how to do this in the Next.js and Apollo documentation
class MyApp extends App {
    //getInitialProps is a special lifecyle method that will run first before the initial render happens
    static async getInitialProps({ Component, ctx }){
        let pageProps = {};
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }
        //this exposes the query to the user
        pageProps.query = ctx.query;
        return { pageProps }
    }
    render() {
        const { Component, apollo, pageProps } = this.props;
        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps}/>
                    </Page>
                </ApolloProvider>
            </Container>
        )
    }
}

export default withData(MyApp);