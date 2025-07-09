import React from "react";
import { About } from "./Component/Main/About/About"
import { Book } from "./Component/Main/Book/Book"
import { Company } from "./Component/Main/Company/Company"
import { Portfolio } from "./Component/Main/Portfolio/Portfolio"
import { Print } from "./Component/Main/Print/Print"
import { Service } from "./Component/Main/Service/Service"
import { Reviews } from "./Component/Main/Reviews/Reviews"

export const Middle = (): React.ReactElement => {
    return (
        <>
            <About />
            <Service />
            <Portfolio />
            <Company />
            <Reviews />
            <Book />
            <Print />
        </>

    )
}