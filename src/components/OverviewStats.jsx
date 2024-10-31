import React from 'react';
import { overallStats } from '../data/dummyData';

const OverviewStats = () => (
    <section className="overview-stats">
        <h2>Overview</h2>
        <div className="stats-grid">
            <div>Followers: {overallStats.followers}</div>
            <div>Posts: {overallStats.posts}</div>
            <div>Engagement Rate: {overallStats.engagementRate}%</div>
            <div>Likes: {overallStats.likes}</div>
            <div>Comments: {overallStats.comments}</div>
        </div>
    </section>
);

export default OverviewStats;
