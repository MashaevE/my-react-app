import { Card } from "./Card";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

interface CardProps {
  id: number;
  img: string;
  title: string;
  description: string;
}

const CARD_LIMIT = 10;

export function CardListPage() {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [limit, setLimit] = useState<number>(CARD_LIMIT);
  const { search } = useLocation();

  // Считываем limit из URL
  useEffect(() => {
    const params = new URLSearchParams(search);
    const urlLimit = Number(params.get('limit'));

    if (urlLimit > 0) {
      setLimit(urlLimit);
    } else {
      setLimit(CARD_LIMIT);
    }
  }, [search]);

  // Загружаем данные из JSON
  useEffect(() => {
    fetch('../../../public/myCards.json')
      .then(response => {
        if (!response.ok) throw new Error(`Ошибка загрузки: ${response.status}`);
        return response.json();
      })
      .then(data => setCards(data))
      .catch(error => console.error('Ошибка:', error));
  }, []);

  return (
    <>
      {cards.slice(0, limit).map(card => (
        <Card
          key={card.id}
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}
    </>
  );
}