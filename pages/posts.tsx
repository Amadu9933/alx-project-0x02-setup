import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';

interface ApiPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<ApiPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Header />
            <h1 className="text-4xl font-bold mb-4">Posts Page</h1>
            {loading ? (
                <p>Loading posts...</p>
            ) : (
                <div className="flex flex-col items-center w-full">
                    {posts.map(post => (
                        <PostCard
                            key={post.id}
                            title={post.title}
                            content={post.body}
                            userId={post.userId}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Posts;
