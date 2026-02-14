import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';

const JobApply = () => {
    const { id: jobId } = useParams();
    // const params = useParams();
    const [job, setJob]=useState([]);

    // console.log(params)
    useEffect(()=>{
        fetch(`http://localhost:3000/jobs/${jobId}`)
        .then(res=>res.json())
        .then(data=>{
            setJob(data)
        })
    },[jobId])
    const { user } = useAuth();
    // console.log(jobId,user)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries())
        data.remote = formData.has('remote')
        console.table([data])
    }

    return (
        <div>
            {/* <Link to={`/jobs/${jobId}`}>Detais</Link> */}
            <div className="max-w-3xl mx-auto p-6">
                <div className='flex gap-4 items-center justify-center'>
                    <figure>
                    <img src={job?.company_logo} alt="Job Image" />
                </figure>
                <div>
                    <h1 className="text-2xl font-bold">{job?.title}</h1>
                <h1 className="text-xl font-bold">{job?.company}</h1>
                </div>

                </div>
                <form onSubmit={handleFormSubmit} className="card bg-base-100 shadow-xl p-8 space-y-8">
                    <h2 className="text-3xl font-bold text-center">Job Application</h2>

                    <fieldset className="border border-base-300 rounded-box p-6">
                        <legend className="px-2 font-semibold text-lg">
                            Personal Information
                        </legend>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="label">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div>
                                <label className="label">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5 mt-5">
                            <div>
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div>
                                <label className="label">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="border border-base-300 rounded-box p-6">
                        <legend className="px-2 font-semibold text-lg">
                            Job Details
                        </legend>

                        <div className="space-y-5">
                            <div>
                                <label className="label">Position</label>
                                <select
                                    name="position"
                                    className="select select-bordered w-full"
                                >
                                    <option value="">Select position</option>
                                    <option value="frontend">Frontend Developer</option>
                                    <option value="backend">Backend Developer</option>
                                    <option value="fullstack">Full Stack Developer</option>
                                    <option value="designer">UI/UX Designer</option>
                                </select>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="label">Experience</label>
                                    <input
                                        type="number"
                                        name="experience"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div>
                                    <label className="label">Availability</label>
                                    <input
                                        type="date"
                                        name="availability"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label cursor-pointer justify-start gap-3">
                                    <input
                                        type="checkbox"
                                        name="remote"
                                        className="checkbox checkbox-primary"
                                    />
                                    <span className="label-text">
                                        Open to remote opportunities
                                    </span>
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="border border-base-300 rounded-box p-6">
                        <legend className="px-2 font-semibold text-lg">
                            Documents
                        </legend>

                        <div className="space-y-5">


                            <div>
                                <label className="label">Portfolio</label>
                                <input
                                    type="url"
                                    placeholder='www.linkedIn.com'
                                    name="portfolio"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div>
                                <label className="label">Cover Letter</label>
                                <textarea
                                    name="coverLetter"
                                    rows="4"
                                    className="textarea textarea-bordered w-full"
                                ></textarea>
                            </div>
                        </div>
                    </fieldset>

                    <button type="submit" className="btn btn-primary w-full btn-lg">
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;