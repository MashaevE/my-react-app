import React from "react";

export const Print = (): React.ReactElement => {
    return (
        <section className="print container">
            <div className="print__img-list">
                <div className="print__img-block">
                    <img src="img/karelia-fon.png" alt="Карелия фон" className="print__img"/>
                </div>
                <div className="print__img-block">
                    <img src="img/rostov-fon.png" alt="Ростов-на-Дону фон" className="print__img"/>
                </div>
                <div className="print__img-block">
                    <img src="img/enisei-fon.png" alt="Енисей фон" className="print__img"/>
                </div>
                <div className="print__img-block">
                    <img src="img/nn-fon.png" alt="Нижний новгород фон" className="print__img"/>
                </div>
                <div className="print__img-block">
                    <img src="img/cheboksar-fon.png" alt="Чебоксары фон" className="print__img"/>
                </div>
            </div>
        </section>
    )
}