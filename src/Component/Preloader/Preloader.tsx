import React, { useEffect } from "react";

export const Preloader = (): React.ReactElement => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            const preloader = document.querySelector('.preloader') as HTMLElement | null;

            if (preloader) {
                document.body.style.overflow = '';
                preloader.innerHTML = '';
                preloader.style.display = 'none';
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="preloader">
            <div className="preloader__row">
                <div className="preloader__item"></div>
                <div className="preloader__item"></div>
            </div>
        </div>
    )
}