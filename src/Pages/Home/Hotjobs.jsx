import React from 'react';
import HotjobsCard from '../Shared/HotjobsCard/HotjobsCard';
import { Suspense } from 'react';


const Hotjobs = ({jobs}) => {
    // console.log(jobs)
    
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Jobs of the day</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-12'>
                {
                    jobs.map(job=><Suspense key={job._id} fallback={<span className="loading loading-spinner loading-xl"></span>}><HotjobsCard  job={job}/></Suspense>)
                }
            </div>
        </div>
    );
};

export default Hotjobs;