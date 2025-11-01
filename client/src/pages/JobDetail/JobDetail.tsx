import React from 'react';
import Navbar from '../NavBar/Navbar';
import JobListing from './components/JobListing';
import { Link } from 'react-router-dom';
import { FiBookmark, FiClock, FiMapPin } from 'react-icons/fi';

const JobDetail: React.FC = () => {
  return (
    <div>
      <div className="bg-black  text-white">
      {/* Navbar en haut */}
      <div className="px-6 lg:px-24 pt-6">
        <Navbar />
      </div>

      {/* Titre centré */}
      <div className="flex justify-center items-center py-20">
        <h1 className="text-5xl font-bold">Jobs</h1>
      </div>
    </div>
     <div className="bg-white mx-12 p-6 mb-6">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-4 text-gray-500 text-sm">
            <div className="flex items-center gap-1 bg-[#3096891A] p-2 rounded-lg">
              <FiClock />
              <span>10 min ago</span>
            </div>
            <FiBookmark className="cursor-pointer hover:text-blue-600" size={20} />
          </div>
    
          {/* Middle section: logo + title/subtitle */}
          <div className="flex items-center gap-4 mb-4">
            
              <img src="assets/images/Logo.png" alt={`logo`} className="w-12 h-12 object-contain rounded" />
           
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Corporate Solutions Executive</h2>
              <p className="text-gray-600">d-it</p>
            </div>
          </div>
    
          {/* Bottom section: info + apply button */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1"><img src='assets/images/job/briefcase.png' alt='briefcase' className='w-5 h-5' /> dfdf</div>
              <div className="flex items-center gap-1"><img src='assets/images/job/clock.png' alt='briefcase' className='w-5 h-5' />Full Name</div>
              <div className="flex items-center gap-1"><img src='assets/images/job/g135.png' alt='briefcase' className='w-5 h-5' /> 12121</div>
              <div className="flex items-center gap-1"><FiMapPin color="#309689" size={20} /> fouchana</div>
            </div>
           <Link to={`/job`}>
      <button className="bg-[#309689] text-white px-16 py-2 rounded hover:bg-blue-700 transition">
        Apply Job
      </button>
    </Link>
          </div>
        </div>
    <JobListing></JobListing>
    </div>
    
  );
};

export default JobDetail;
