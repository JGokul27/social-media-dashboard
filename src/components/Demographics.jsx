// src/components/Demographics.js

import React from 'react';
import { demographicsData } from '../data/dummyData';

const Demographics = () => (
    <section className="demographics">
        <h2>Audience Demographics</h2>
        <p>Age Groups: {JSON.stringify(demographicsData.ageGroups)}</p>
        <p>Gender: {JSON.stringify(demographicsData.gender)}</p>
        <p>Locations: {JSON.stringify(demographicsData.locations)}</p>
    </section>
);

export default Demographics;
