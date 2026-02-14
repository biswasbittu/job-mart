import React from 'react';
import { FaBriefcaseMedical, FaIndustry } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { LuWatch } from 'react-icons/lu';
import { MdOutlineManageAccounts, MdOutlineUpdate } from 'react-icons/md';
import { RiCupLine, RiMoneyRupeeCircleLine } from 'react-icons/ri';
import { Link, useLoaderData } from 'react-router';

const Jobdetails = () => {
    const { _id,title, company, company_logo, salaryRange, jobType, applicationDeadline,category,location,status,requirements,responsibilities } = useLoaderData()

    return (
        <div>
            
            <div className='flex justify-center'>
                <img src={company_logo} alt="" />
            </div>
            <h1 className='text-4xl text-center font-bold'>{company}</h1>
            <h2 className='text-center text-xl font-bold'>{title}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table my-12">
                       
                        <tbody >
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th className='text-gray-400 flex gap-2'><FaIndustry size={16} />Industry</th>

                                <td className='text-xl'>{company}</td>
                                <td className='text-gray-400 flex gap-2 text-xl items-center '><MdOutlineManageAccounts size={20} />Job level</td>
                                <td className='text-xl'>{title}</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th className='text-gray-400 flex gap-2'><RiMoneyRupeeCircleLine size={18} />Salary</th>
                                <td className='text-xl'>{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</td>
                                <td className='text-gray-400 flex gap-2 text-xl items-center '><FaBriefcaseMedical size={16} />category</td>

                                <td className='text-xl'>{category}</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th className='text-gray-400 flex gap-2'><RiCupLine size={18} />Job type</th>
                                <td className='text-xl'>{jobType}</td>
                                <td className='text-gray-400 flex gap-2 text-xl items-center '><LuWatch  size={24} />status</td>

                                <td className='text-xl'>{status}</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th className='text-gray-400 flex gap-2'><MdOutlineUpdate size={18} />Updated</th>
                                <td className='text-xl'>{applicationDeadline}</td>
                                <td className='text-gray-400 flex gap-2 text-xl items-center '><FaMapLocationDot  size={20} />Location</td>

                                <td className='text-xl'>{location}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Essential Knowledge, Skills, and Experience</h1>
                    <ul className="list-disc pl-5">
                        {
                         responsibilities.map((skill,idx)=><li key={idx}>{skill}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Preferred Experience</h1>
                    <ul className="list-disc pl-5">
                        {
                         requirements.map((skill,idx)=><li key={idx}>{skill}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className='flex justify-center'>
                <Link to={`/jobApply/${_id}`} > 
                <button className='btn btn-wide'>Apply Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Jobdetails;