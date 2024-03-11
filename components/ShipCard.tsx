// components/ShipCard.tsx
import React from 'react';
import { Ship } from '@/util/types/graphql';

interface ShipCardProps {
  ship: Ship;
  onClick: () => void;
}

const ShipCard: React.FC<ShipCardProps> = ({ ship, onClick }) => {
  return (
    <div
      className="w-80 overflow-hidden border-2 border-green hover:border-blue hover:text-blue cursor-pointer"
      onClick={onClick}
    >
      {ship.image && ship.name && <img
        src={ship.image}
        alt={ship.name}
        className="w-full h-48 object-cover"
      />}
      {!ship.image && (
        <div className="flex justify-center items-center w-full min-w-48 h-48 object-cover bg-gray">
            <span className="text-center text-white">IMAGE NOT FOUND</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{ship.name}</h3>
      </div>
    </div>
  );
};

export default ShipCard;
