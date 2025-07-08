import React from "react";

export const Print = (): React.ReactElement => {
    return (
        <section className="print container">
            <div className="print__img-list">
                <div className="print__img-block">
                    <img src="img/iso.png" alt="ISO" className="print__img"/>
                </div>
                <div className="print__img-block">
                    <img src="img/iso.png" alt="ISO" className="print__img"/>
                </div>
                <div className="print__img-block">
                    <img src="img/pakistan.png" alt="Пакестан" className="print__img"/>
                </div>
                <div className="print__img-block">
                    <img src="img/pasha.png" alt="Паша" className="print__img"/>
                </div>
                <div className="print__img-block">
                    <img src="img/secp.png" alt="Secp" className="print__img"/>
                </div>
            </div>
        </section>
    )
}