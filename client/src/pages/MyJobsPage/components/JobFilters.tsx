import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React from 'react';

export default function JobFilters() {
  return (
    <aside className="md:col-span-1 bg-[#EBF5F4] p-6 rounded-lg shadow space-y-6">
      <h2 className="text-lg font-semibold">Filters</h2>
{/* Search Field */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Job title or company"
        size="small"
      />

      {/* Location Dropdown */}
      <FormControl fullWidth size="small">
        <InputLabel>Choose city</InputLabel>
        <Select
         // value={city}
          label="Choose city"
          //onChange={(e) => setCity(e.target.value)}
        >
          <MenuItem value="Tunis">Tunis</MenuItem>
          <MenuItem value="Sfax">Sfax</MenuItem>
          <MenuItem value="Gabès">Gabès</MenuItem>
        </Select>
      </FormControl>

      {/* Category */}
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        {['Commerce', 'Telecommunications', 'Hotels & Tourism', 'Education', 'Financial Services'].map((cat, i) => (
          <label key={i} className="flex justify-between items-center mb-1 text-sm">
            <span>
              <input type="checkbox" className="mr-2" />
              {cat}
            </span>
            <span className="text-gray-500">10</span>
          </label>
        ))}
        <button className="text-[#309689] text-sm mt-2 hover:underline">Show More</button>
      </div>

      {/* Job Type */}
      <div>
        <h3 className="font-semibold mb-2">Job Type</h3>
        {['Full Time', 'Part Time', 'Freelance', 'Seasonal', 'Fixed-Price'].map((type, i) => (
          <label key={i} className="flex justify-between items-center mb-1 text-sm">
            <span>
              <input type="checkbox" className="mr-2" />
              {type}
            </span>
            <span className="text-gray-500">10</span>
          </label>
        ))}
      </div>

      {/* Experience Level */}
      <div>
        <h3 className="font-semibold mb-2">Experience Level</h3>
        {['No-experience', 'Freshers', 'Intermediate', 'Expert'].map((level, i) => (
          <label key={i} className="flex justify-between items-center mb-1 text-sm">
            <span>
              <input type="checkbox" className="mr-2" />
              {level}
            </span>
            <span className="text-gray-500">10</span>
          </label>
        ))}
      </div>

      {/* Date Posted */}
      <div>
        <h3 className="font-semibold mb-2">Date Posted</h3>
        {['Last Hour', 'Last 24 Hours', 'Last 7 Days', 'Last 30 Days'].map((date, i) => (
          <label key={i} className="flex justify-between items-center mb-1 text-sm">
            <span>
              <input type="checkbox" className="mr-2" />
              {date}
            </span>
            <span className="text-gray-500">10</span>
          </label>
        ))}
      </div>

      {/* Salary Slider */}
      <div>
        <h3 className="font-semibold mb-2">Salary</h3>
        <input
  type="range"
  min={0}
  max={9999}
  className="w-full"
  style={{
    accentColor: '#309689',
  }}
/>

        <div className="flex justify-between text-sm text-[#309689] mt-1">
          <span>$0</span>
          <span>$9999</span>
        </div>
        <button className="mt-3 w-full bg-[#309689] text-white px-4 py-2 rounded hover:bg-[#267a74]">
          Apply
        </button>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-semibold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['engineering', 'design', 'ui/ux', 'marketing', 'management', 'soft', 'construction'].map((tag, i) => (
            <span
              key={i}
              className="bg-white text-[#309689] px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-[#d3ebe9]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
