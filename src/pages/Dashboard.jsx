import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import OverviewStats from '../components/OverviewStats';
import EngagementGraph from '../components/EngagementGraph';
import FollowersGrowthChart from '../components/FollowersGrowthChart';
import PostPerformance from '../components/PostPerformance';
import Demographics from '../components/Demographics';
import ActivityFeed from '../components/ActivityFeed';

const Dashboard = () => (
    <div className="dashboard">
        <Header />
        <div className="dashboard-content">
            <Sidebar />
            <main>
                <OverviewStats />
                <EngagementGraph />
                <FollowersGrowthChart />
                <PostPerformance />
                <Demographics />
                <ActivityFeed />
            </main>
        </div>
    </div>
);

export default Dashboard;
