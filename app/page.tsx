"use client";
import ShipPopup from '../components/ShipPopup';
import ShipList from '../components/ShipList';
import { Ship } from '@/util/types/graphql';
import React, { useState } from 'react';

export default function Home() {
  const [selectedShip, setSelectedShip] = useState<Ship | null>(null);

  const handleCardClick = (ship: Ship) => {
    setSelectedShip(ship);
  };

  return (
    <main className="flex justify-center min-h-screen p-14">
      <div className="w-full justify-between flex flex-wrap gap-4">
        <ShipList handleCardClick={handleCardClick} />
      </div>
      {selectedShip && (
        <ShipPopup ship={selectedShip} onClose={() => setSelectedShip(null)} />
      )}
    </main>
  );
}