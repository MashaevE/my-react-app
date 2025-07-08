import React from "react";
import { CardList } from "../../Card/CardList";

export const Service = (): React.ReactElement => {
    return (
        <section className="service container">
            <div className="service__square">
                <div className="service__circle circle-1"></div>
                <div className="service__circle circle-2"></div>
                <div className="service__circle circle-3"></div>
                <div className="service__circle circle-4"></div>
                <h2 className="service__title">Сервисы</h2>
            </div>

            <div className="service__card-container">
                <div className="service__card-level-1">
                    <CardList />
                </div>
                <div className="service__card-level-2">
                    <CardList />
                </div>
            </div>
        </section>
    )
}