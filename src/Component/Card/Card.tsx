interface CardProps {
    img: string;
    title: string;
    description: string;
}

export function Card ({img,title,description}:CardProps) {

    return (
        <div className="service__card">
                        <img src={img} alt="Лабораторный Флакон" className="service__flacon-img"/>
                        <div className="service__comment">
                            <h2 className="service__card-title">{title}</h2>
                            <p className="service__card-description">{description}</p>
                        </div>
        </div>
    );
}