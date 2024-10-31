// src/components/PostPerformance.js

import React from 'react';
import { postPerformanceData } from '../data/dummyData';

const PostPerformance = () => (
    <section className="post-performance">
        <h2>Top Performing Posts</h2>
        <table>
            <thead>
                <tr>
                    <th>Post</th>
                    <th>Likes</th>
                    <th>Comments</th>
                    <th>Shares</th>
                </tr>
            </thead>
            <tbody>
                {postPerformanceData.map((post) => (
                    <tr key={post.id}>
                        <td>{post.post}</td>
                        <td>{post.likes}</td>
                        <td>{post.comments}</td>
                        <td>{post.shares}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
);

export default PostPerformance;
