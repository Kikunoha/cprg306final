"use client";
import { useState } from 'react';
import Header from './components/header';
import Card from './components/card';
import CardInfo from './components/cardinfo';
import cardsData from './components/cards.json'; // Ensure the correct path to cards.json

export default function Home() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    console.log("Card clicked:", card); // Debugging log
    setSelectedCard(card);
  };

  const closeOverlay = () => {
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-red-600">
      <Header title="OPTCG Card Database" />
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-8 ml-25">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.name}
            description={card.ability || 'No description available'}
            image={card.images || '/images/placeholder.jpg'}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </main>

      {selectedCard && (
        <div
          id="overlay"
          className="fixed inset-1/4 bg-white bg-opacity-0 h-50 w-80 justify-center items-center flex m-40"
          onClick={closeOverlay}
        >
          <div
            className="bg-white border border-red-500 rounded-lg shadow-md p-4 max-w-xs bg-opacity-0"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='text-red-600 font-bold text-lg mt-2'>Effect:</h2>
            <p className="flex flex-row">{selectedCard.attribute}</p>
            <CardInfo
              title={selectedCard.name}
              description={selectedCard.ability}
              image={selectedCard.images}
            />
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={closeOverlay}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}