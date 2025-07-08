import React from "react";

export const Company = (): React.ReactElement => {
    return (
        <section className="company container">
            <div className="company__img-list">
                <img src="img/mentorCity.png" alt="Mentor City" className="company__img"/>
                <img src="img/postal.png" alt="Postal Methods" className="company__img"/>
                <img src="img/Hstay.png" alt="Hstay" className="company__img"/>
                <img src="img/subway.png" alt="SUBWAY" className="company__img"/>
                <img src="img/HomeVisit.png" alt="Home Visit" className="company__img"/>
            </div>
        </section>
    )
}