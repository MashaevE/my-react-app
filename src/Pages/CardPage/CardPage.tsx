import React from "react";
import { Header } from "../../Component/Header/Header";
import { CardListPage } from "../../Component/Card/CardListPage";

export const CardPage = (): React.ReactElement => {
    return (
        <>
            <Header/>
            <div className="card__content">
                <CardListPage/>
            </div>
        </>
    )
}