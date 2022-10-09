import Head from "next/head";
import {Box} from '@chakra-ui/react'
import Navbar from './Navbar';
import Footer from "./Footer";
const Layout=({children})=>{
    return(
        <>
            <Head>
                <title>Royal Properties</title>
            </Head>

            {/* SELF NOTEE!!!! */}
             {/* Prev Width was 1280 */}
            <Box maxWidth="2000px" m="auto">
                <header>
                    <Navbar/>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer/>
                </footer>
            </Box>
        </>
    )
}

export default Layout;