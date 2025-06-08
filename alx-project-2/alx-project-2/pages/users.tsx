import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';

interface ApiUser {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<ApiUser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Header />
            <h1 className="text-4xl font-bold mb-4">Users Page</h1>
            {loading ? (
                <p>Loading users...</p>
            ) : (
                <div className="flex flex-col items-center w-full">
                    {users.map(user => (
                        <UserCard
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            address={`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Users;
