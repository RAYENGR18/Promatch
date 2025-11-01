
import JobCard from '@/pages/HomePage1/components/JobCard';
import React from 'react';
import JobFilters from './JobFilters';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
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
      <JobFilters></JobFilters>
        {/* Job Listings */}
        <section className="md:col-span-3">
        <div className="flex justify-between items-center mb-4">
  <p className="text-sm text-gray-600">Showing 6–6 of 10 results</p>

  <div className="w-48"> {/* largeur fixe ou responsive */}
    <FormControl fullWidth size="small">
      <InputLabel>Sort by</InputLabel>
      <Select label="Sort by">
        <MenuItem value="latest">Sort by latest</MenuItem>
        <MenuItem value="salary">Sort by salary</MenuItem>
      </Select>
    </FormControl>
  </div>
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
