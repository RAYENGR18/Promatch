import React from 'react';
import JobCard from '../components/JobCard';

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

const JobList: React.FC = () => {
  return (
 <div className="w-full px-24 py-12">
  {/* Titre et lien */}
  <div className="flex justify-between items-center mb-2">
    <h1 className="text-3xl font-bold text-left">Recent Jobs Available</h1>
    <a href="/jobs" className="text-[#309689] font-medium hover:underline">
      View All
    </a>
  </div>

  {/* Sous-titre */}
  <h4 className="text-lg text-left mb-6">
    At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
  </h4>

  {/* Conteneur des cards */}
  <div className="flex flex-col gap-6">
    {jobs.map((job, index) => (
      <div key={index} className="w-full mx-6">
        <JobCard {...job} />
      </div>
    ))}
  </div>
</div>


  );
};

export default JobList;
