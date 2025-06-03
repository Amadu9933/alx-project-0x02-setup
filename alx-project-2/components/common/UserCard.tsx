import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
    <div className="border rounded-lg shadow-md p-6 bg-white mb-4 w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-700 mb-1">Email: {email}</p>
        <p className="text-gray-600 text-sm">Address: {address}</p>
    </div>
);

export default UserCard;
