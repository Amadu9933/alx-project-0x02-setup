import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => (
    <div className="border rounded-lg shadow-md p-6 bg-white mb-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{content}</p>
    </div>
);

export default Card;
