

import React, { useEffect } from "react";
import './Jobcard.css';
import { UserPlus, Layers, X } from 'lucide-react';
import build from "../assets/Build.png";

const Jobcard = ({ job, onDelete }) => {
  useEffect(() => {
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <div className="cards">
      <div className={`job-card ${job.isBackend ? 'new-job' : ''}`} >
        <div className="job-card-header">
          <div className="img-box">
            <img src={job.companyLogo} alt="" className="company-logo"/>
          </div>
          <span className="posted-time">{job.postedAgo}</span>
        </div>

        <div className="job-title">
          <h3 className="job-title">{job.title}</h3>
        </div>

        <div className="job-meta">
          <div className="exp"> 
            <UserPlus size={18} className="user"/>
            <span>{job.location || job.experience}</span>
          </div>

          <div className="type">
            <img size={18} src="src/assets/Build.png" className="buil"/>
            <span>{job.jobType}</span>
          </div>

          <div className="sal"> 
            <Layers size={16} className="layer"/>
        
            <span>
              {job.isBackend && typeof job.salary === 'number' 
                ? `₹${job.salary.toLocaleString()} `
                : job.salary}
            </span>
          </div>
        </div>

        <div className="job-desc">
          <ul>
            <li>A user-friendly interface lets you browse stunning photos and videos</li>
            <li>Filter destinations based on interests and travel style, and create personalized </li>
          </ul>
        </div>

        <div className="btn-container">
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
