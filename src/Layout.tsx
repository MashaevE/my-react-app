import React from "react";
import { Header } from "./Component/Header/Header";
import { Footer } from "./Component/Footer/Footer";
import { Outlet } from "react-router";
import { Preloader } from "./Component/Preloader/Preloader";


export const Layout = (): React.ReactElement => {
    return(
        <>
        <Preloader />
        <Header/>
        <main className="main container"><Outlet/></main>
        <Footer/>
        </>
    )
}