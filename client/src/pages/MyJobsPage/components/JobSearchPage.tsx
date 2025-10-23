
import JobCard from '@/pages/HomePage1/components/JobCard';
import React from 'react';
type Job = {
  title: string;
  company: string;
  industry: string;
  type: string;
  salary: string;
  location: string;
};

const jobs: Job[] = [
  {
    title: 'Forward Security Director',
    company: 'Bauch, Schuppe and Schultz Co',
    industry: 'Technology',
    type: 'Full time',
    salary: '$40000–$42000',
    location: 'New York, USA',
  },
  {
    title: 'Regional Creative Facilitator',
    company: 'Wisozk - Becker Co',
    industry: 'Media',
    type: 'Part time',
    salary: '$28000–$32000',
    location: 'Los Angeles, USA',
  },
  {
    title: 'Internal Integration Planner',
    company: 'Matz, Quigley and Smith',
    industry: 'Construction',
    type: 'Full time',
    salary: '$30000–$34000',
    location: 'Texas, USA',
  },
  {
    title: 'District Intranet Director',
    company: 'VonRueden - Weber Co',
    industry: 'Commerce',
    type: 'Full time',
    salary: '$40000–$42000',
    location: 'Florida, USA',
  },
];

const JobSearchPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="md:col-span-1 bg-[#EBF5F4] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <input
            type="text"
            placeholder="Job title or company"
            className="w-full mb-4 px-3 py-2 border rounded"
          />
          <select className="w-full mb-4 px-3 py-2 border rounded">
            <option>Choose city</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Texas</option>
          </select>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Category</h3>
            <label className="block"><input type="checkbox" /> Commerce</label>
            <label className="block"><input type="checkbox" /> Hotels & Tourism</label>
            <label className="block"><input type="checkbox" /> Media</label>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Job Type</h3>
            <label className="block"><input type="checkbox" /> Full Time</label>
            <label className="block"><input type="checkbox" /> Part Time</label>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Apply Filters
          </button>
        </aside>

        {/* Job Listings */}
        <section className="md:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">Showing 6–6 of 10 results</p>
            <select className="px-3 py-2 border rounded">
              <option>Sort by latest</option>
              <option>Sort by salary</option>
            </select>
          </div>
         {jobs.map((job, index) => (
      <div key={index} className="w-full">
        <JobCard {...job} />
      </div>
    ))}
        </section>
      </div>
    </div>
  );
};

export default JobSearchPage;
