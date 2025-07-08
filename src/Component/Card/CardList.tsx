import { Card } from "./Card";
import { useState, useEffect } from "react";

interface CardProps {
    id: number;
    img: string;
    title: string;
    description: string;
}

export function CardList () {
    const [isCard, setIsCard] = useState <CardProps[]>([]);

    useEffect(() => {
  fetch('../../../public/cards.json')
  .then(response => {
    if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    setIsCard(data);
    console.log(data);
  })
  .catch(error => {
    console.error('Ошибка при получении данных:', error);
  });
}, [])
return (
  <>
    {isCard.map(card => (
      <Card
        key={card.id}
        img={card.img}
        title={card.title}
        description={card.description}
      />
    ))}
  </>
)

}