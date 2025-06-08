import React, { useState } from 'react';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import Header from '../components/layout/Header';

const Home: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [posts, setPosts] = useState([
        { title: 'Card One', content: 'This is the content of the first card.' },
        { title: 'Card Two', content: 'This is the content of the second card.' },
    ]);

    const handleAddPost = (data: { title: string; content: string }) => {
        setPosts(prev => [...prev, data]);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Header />
            <h1 className="text-4xl font-bold mb-4">Home Page</h1>
            <button
                className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setModalOpen(true)}
            >
                Add New Post
            </button>
            {posts.map((post, idx) => (
                <Card key={idx} title={post.title} content={post.content} />
            ))}
            <PostModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleAddPost}
            />
        </div>
    );
};

export default Home;
