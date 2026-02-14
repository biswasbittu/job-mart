import React from 'react';

import { MapPin, Clock, Briefcase, Heart } from "lucide-react";

import { CiLocationOn } from 'react-icons/ci';
import { TiShoppingBag } from 'react-icons/ti';
import { MdOutlineWatchLater } from 'react-icons/md';
import { Link } from 'react-router';
const HotjobsCard = ({ job }) => {
  // console.log(job)
  const { _id,
    company,
    company_logo,
    location,
    title,
    jobType,
    description,
    requirements,
    salaryRange,
  applicationDeadline,
 } = job

  return (
    <div className="card bg-base-100 w-96 shadow-sm border ">

      <div className='flex gap-2'>
        <figure className=''>
          <img className='w-24'
            src={company_logo}
            alt="Shoes" />
        </figure>
        <div>
          <h1 className='text-xl font-semibold'>{company}</h1>
          <p className='text-gray-400 flex gap-1 items-center'> <CiLocationOn />{location}</p>
        </div>
      </div>




      <div className="card-body">
        <h2 className="card-title">
          {title}

        </h2>
        <div className='flex '>
          <p className='flex items-center gap-1 text-gray-400'><TiShoppingBag />{jobType}</p>
        <p className='flex items-center gap-1 text-gray-400'><MdOutlineWatchLater />{applicationDeadline}</p>
        </div>
        <p>{description}</p>
        <div className="card-actions ">
          {
            requirements.map((skill,idx)=><div key={idx} className="gap-16">{skill}</div>)
          }
          
        </div>
        <div className='flex items-center'>
          <p className='text-xl text-blue-500'>salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
          <Link to={`/jobs/${_id}`} className='btn'>Show Details</Link>
        </div>
      </div>
    </div>
  );
};

export default HotjobsCard;