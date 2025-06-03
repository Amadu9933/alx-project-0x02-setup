import React from 'react';
import Button from '../components/common/Button';
import Header from '../components/layout/Header';

const About: React.FC = () => (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <Header />
        <h1 className="text-4xl font-bold mb-4">About Page</h1>
        <p className="mb-6">This is the About page of your Next.js project.</p>
        <div className="flex gap-4">
            <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
            <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
            <Button size="large" shape="rounded-full">Large Rounded-full</Button>
        </div>
    </div>
);

export default About;
