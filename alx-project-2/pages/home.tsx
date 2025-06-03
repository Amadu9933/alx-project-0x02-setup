import React from 'react';
import Card from '../components/common/Card';

const Home: React.FC = () => (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Home Page</h1>
        <Card title="Card One" content="This is the content of the first card." />
        <Card title="Card Two" content="This is the content of the second card." />
    </div>
);

export default Home;
