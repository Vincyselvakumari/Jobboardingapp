

import React, { useEffect, useState } from "react";
import Jobcard from "../Components/Jobcard";
import "./Jobcard.css";
import amazonLogo from '../assets/amazonlogo.png';
import teslaLogo from '../assets/teslaLogo.png';
import swiggyLogo from '../assets/swiggyLogo.png';
import axios from "axios";

const Joblist = ({ filters, refresh }) => {
  const [jobs, setJobs] = useState([]);
  const [newJobs, setNewJobs] = useState([]);

  const handleDeleteJob = (id) => {
    setNewJobs(prev => prev.filter(job => job.id !== id));
  };

  const filterJobs = (jobs, { searchText, location, jobType, salary }) => {
    return jobs.filter(job => {
      const matchesText = searchText
        ? job.title.toLowerCase().includes(searchText.toLowerCase())
        : true;

      const matchesLocation =
        location && location !== "Preferred Location"
          ? job.location && job.location.toLowerCase() === location.toLowerCase()
          : true;

      const matchesJobType =
        jobType && jobType !== "Job Type"
          ? job.jobType && job.jobType.toLowerCase() === jobType.toLowerCase()
          : true;

      const matchesSalary =
        job.salary && typeof job.salary === "number"
          ? job.salary >= salary[0] && job.salary <= salary[1]
          : true;

      return matchesText && matchesLocation && matchesJobType && matchesSalary;
    });
  };

  useEffect(() => {
   
    setJobs([
      {
        id: 1,
        title: "Full Stack Developer",
        company: "Amazon",
        companyLogo: amazonLogo,
        jobType: "Onsite",
        experience: "1-3 yr Exp",
        salary: "12LPA",
        postedAgo: "24h Ago",
      },
      {
        id: 2,
        title: "Node Js Developer",
        company: "Tesla",
        companyLogo: teslaLogo,
        jobType: "Onsite",
        experience: "1-3 yr Exp",
        salary: "12LPA",
        postedAgo: "24h Ago",
      },
      {
        id: 3,
        title: "UX/UI Designer",
        company: "Swiggy",
        companyLogo: swiggyLogo,
        jobType: "Onsite",
        experience: "1-3 yr Exp",
        salary: "12LPA",
        postedAgo: "24h Ago",
      },
      {
        id: 4,
        title: "Full Stack Developer",
        company: "Amazon",
        companyLogo: amazonLogo,
        jobType: "Onsite",
        experience: "1-3 yr Exp",
        salary: "12LPA",
        postedAgo: "24h Ago",
      },
      {
        id: 5,
        title: "Node Js Developer",
        company: "Tesla",
        companyLogo: teslaLogo,
        jobType: "Onsite",
        experience: "1-3 yr Exp",
        salary: "12LPA",
        postedAgo: "24h Ago",
      },
      {
        id: 6,
        title: "UX/UI Designer",
        company: "Swiggy",
        companyLogo: swiggyLogo,
        jobType: "Onsite",
        experience: "1-3 yr Exp",
        salary: "12LPA",
        postedAgo: "24h Ago",
      },
      {
        id: 7,
        title: "Full Stack Developer",
        company: "Amazon",
        companyLogo: amazonLogo,
        jobType: "Onsite",
        experience: "1-3 yr Exp",
        salary: "12LPA",
        postedAgo: "24h Ago",
      },
      {
        id: 8,
        title: "Node Js Developer",
        company: "Tesla",
        companyLogo: teslaLogo,
        jobType: "Onsite",
        experience: "1-3 yr Exp",
        salary: "12LPA",
        postedAgo: "24h Ago",
      },
      { id: 9, title: "React Js Developer", company: "Amazon", companyLogo: amazonLogo, jobType: "Part Time", location: "Chennai", salary: 110000, postedAgo: "24h Ago" },
      { id: 10, title: "Node Js Developer", company: "Tesla", companyLogo: teslaLogo, jobType: "Internship", location: "Bangalore", salary: 90000, postedAgo: "24h Ago" },
      { id: 11, title: "Web Developer", company: "Swiggy", companyLogo: swiggyLogo, jobType: "Contract", location: "Remote", salary: 70000, postedAgo: "24h Ago" },
      { id: 13, title: "Business Analyst", company: "Amazon", companyLogo: amazonLogo, jobType: "Full Time", location: "Chennai", salary: 50000, postedAgo: "24h Ago" },
      { id: 14, title: "Data Engineer", company: "Tesla", companyLogo: teslaLogo, jobType: "Internship", location: "Bangalore", salary: 60000, postedAgo: "24h Ago" },
      { id: 15, title: "UX/UI Designer", company: "Swiggy", companyLogo: swiggyLogo, jobType: "Full Time", location: "Remote", salary: 70000, postedAgo: "24h Ago" },
      { id: 16, title: "MERN Fullstack Developer", company: "Amazon", companyLogo: amazonLogo, jobType: "Part Time", location: "Chennai", salary: 80000, postedAgo: "24h Ago" },
      { id: 17, title: "Frontend Developer", company: "Tesla", companyLogo: teslaLogo, jobType: "Contract", location: "Bangalore", salary: 10000, postedAgo: "24h Ago" },

     
      { id: 18, title: "Frontend Developer", company: "Tesla", companyLogo: teslaLogo, jobType: "Full Time", location: "Chennai", salary: 60000, postedAgo: "12h Ago" },
      { id: 19, title: "Backend Engineer", company: "Amazon", companyLogo: amazonLogo, jobType: "Part Time", location: "Bangalore", salary: 40000, postedAgo: "2d Ago" },
      { id: 20, title: "UI Designer", company: "Swiggy", companyLogo: swiggyLogo, jobType: "Internship", location: "Remote", salary: 15000, postedAgo: "5d Ago" },
      { id: 21, title: "Mobile App Developer", company: "Tesla", companyLogo: teslaLogo, jobType: "Contract", location: "Chennai", salary: 50000, postedAgo: "1d Ago" },
      { id: 22, title: "Data Analyst", company: "Amazon", companyLogo: amazonLogo, jobType: "Full Time", location: "Hyderabad", salary: 70000, postedAgo: "3d Ago" },
      { id: 23, title: "QA Tester", company: "Swiggy", companyLogo: swiggyLogo, jobType: "Part Time", location: "Bangalore", salary: 30000, postedAgo: "1w Ago" },
      { id: 24, title: "Cloud Engineer", company: "Tesla", companyLogo: teslaLogo, jobType: "Full Time", location: "Remote", salary: 90000, postedAgo: "2w Ago" },
      { id: 25, title: "Machine Learning Intern", company: "Amazon", companyLogo: amazonLogo, jobType: "Internship", location: "Chennai", salary: 20000, postedAgo: "4d Ago" },
      { id: 26, title: "DevOps Engineer", company: "Swiggy", companyLogo: swiggyLogo, jobType: "Contract", location: "Bangalore", salary: 80000, postedAgo: "6d Ago" },
      { id: 27, title: "Full Stack Intern", company: "Tesla", companyLogo: teslaLogo, jobType: "Internship", location: "Remote", salary: 10000, postedAgo: "8h Ago" },
    ]);
  }, []);

  const allJobs = [...jobs, ...newJobs];
  const filteredJobs = filterJobs(allJobs, filters);

  
  const rows = [];
  for (let i = 0; i < filteredJobs.length; i += 4) {
    rows.push(filteredJobs.slice(i, i + 4));
  }

  return (
    <div className="job-list">
      {rows.map((row, idx) => (
        <div className="job-row" key={idx}>
          {row.map(job => (
            <Jobcard key={job.id} job={job} onDelete={job.isBackend ? handleDeleteJob : undefined} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Joblist;
