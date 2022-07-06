import Header from "../components/Header/header"
import { Container } from "./layoutStyle"

import Head from 'next/head'

const Layout = ({children}) => {
    return(
        <Container>
             <Head>
                <title>Resto Manileños</title>               
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <main>{children}</main>
        </Container>
    )

}

export default Layout