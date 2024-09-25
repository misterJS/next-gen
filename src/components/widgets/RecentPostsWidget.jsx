"use client";
import React, { useEffect, useState } from 'react';
import SingleRecentPost from './SingleRecentPost';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { firestore } from '../../../firebase'; // Ensure Firebase is properly configured

const RecentPostsWidget = () => {
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                // Query Firestore for the most recent 3 blog posts
                const q = query(
                    collection(firestore, 'blogs'),
                    orderBy('createdAt', 'desc'),
                    limit(3)
                );
                const querySnapshot = await getDocs(q);
                const posts = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setRecentPosts(posts);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recent posts:', error);
                setLoading(false);
            }
        };

        fetchRecentPosts();
    }, []);

    if (loading) {
        return <div>Loading recent posts...</div>;
    }

    return (
        <>
            <div className="sidebar-item recent-post">
                <h4 className="title">Terbaru</h4>
                <ul>
                    {recentPosts.map((blog) => (
                        <SingleRecentPost blog={blog} key={blog.id} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default RecentPostsWidget;
