// src/pages/CandidateDashboard.js
import React, { useState } from 'react';
import './CandidateDashboard.css';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    description: 'Develop and maintain user-facing features for web applications.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMSAsYbMQ00_QH-KYkbhuW9AjiHR_v3e9SvNFIW7k0513Z9kj2tPNCuU&s',
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Innovatech',
    description: 'Build and optimize server-side applications and APIs.',
    image: 'https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'DataWiz',
    description: 'Analyze and interpret complex data to solve business challenges.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    company: 'DesignPro',
    description: 'Create user-friendly and visually appealing designs for web and mobile platforms.',
    image: 'https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'CloudSync',
    description: 'Streamline and automate software development and deployment processes.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    title: 'Cybersecurity Analyst',
    company: 'SecureNet',
    description: 'Monitor and improve the security of company systems and data.',
    image: 'https://images.pexels.com/photos/5380589/pexels-photo-5380589.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

function CandidateDashboard() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [file, setFile] = useState(null);

  const handleApply = (job) => {
    setSelectedJob(job);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileSubmit = (event) => {
    event.preventDefault();
    if (file) {
      alert(`You have successfully applied for ${selectedJob.title} at ${selectedJob.company}!`);
      setFile(null);
      setSelectedJob(null);
    } else {
      alert('Please upload a PDF file before submitting.');
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Your Dream Job, Just a Click Away!</h1>
      {!selectedJob ? (
        <div className="job-list">
          {jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <img src={job.image} alt={job.title} className="job-image" />
              <h2>{job.title}</h2>
              <h3>{job.company}</h3>
              <p>{job.description}</p>
              <button className="apply-btn" onClick={() => handleApply(job)}>
                Apply
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="apply-form">
          <h2>Apply for {selectedJob.title}</h2>
          <form onSubmit={handleFileSubmit}>
            <label>Upload Resume (PDF only):</label>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn" onClick={() => setSelectedJob(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CandidateDashboard;
