import React from 'react';
import { useLoaderData } from 'react-router';

const Jobdetails = () => {
    const job=useLoaderData()
    console.log(job)
    return (
        <div>
            <h1>Details</h1>
        </div>
    );
};

export default Jobdetails;