import React from "react";

export const Company = (): React.ReactElement => {
    return (
        <section className="company container">
            <div className="company__img-list">
                <img src="img/logo-RusCruise.png" alt="Рускруиз" className="company__img"/>
                <img src="img/cruclub.png" alt="Круиз клаб" className="company__img"/>
                <img src="img/cruise_online.png" alt="Круиз онлайн" className="company__img"/>
                <img src="img/gama.png" alt="Гама" className="company__img"/>
                <img src="img/cruise_people.png" alt="Человек круиз" className="company__img"/>
            </div>
        </section>
    )
}