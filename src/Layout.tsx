import React from "react";
import { Header } from "./Component/Header/Header";
import { Footer } from "./Component/Footer/Footer";
import { Outlet } from "react-router";



export const Layout = (): React.ReactElement => {
    return(
        <>
        <Header/>
        <main className="main container"><Outlet/></main>
        <Footer/>
        </>
    )
}