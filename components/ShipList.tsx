import ShipCard from './ShipCard';
import { Ship, ShipsQuery } from '@/util/types/graphql';
import { fetchShipsData } from '@/lib/api';
import React, { Suspense, useEffect, useState } from 'react';
import { useSettings } from '@/context/SettingsContext';

export default function ShipList({ handleCardClick }: { handleCardClick: (ship: Ship) => void }) {
  const [shipsData, setShipsData] = useState<ShipsQuery | null>(null);
  const { source } = useSettings();

  useEffect(() => {
    fetchShipsData(source).then(setShipsData);
  }, [source]);

  if (!shipsData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {shipsData.ships && shipsData.ships.map((ship) => (
        ship && <ShipCard key={ship.id} ship={ship} onClick={() => handleCardClick(ship)} />
      ))}
    </>
  );
}
