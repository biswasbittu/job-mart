import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Hotjobs from './Hotjobs';

const Home = () => {

    const [jobs,setJobs]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/jobs`)
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <Banner/>
            <Hotjobs jobs={jobs} />
        </div>
    );
};

export default Home;