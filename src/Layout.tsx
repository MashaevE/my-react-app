import React from "react";
import { Header } from "./Component/Header/Header";
import { Footer } from "./Component/Footer/Footer";

type LayoutProps ={
    children : React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
    return(
        <>
        <Header/>
        <main className="main container">{children}</main>
        <Footer/>
        </>
    )
}