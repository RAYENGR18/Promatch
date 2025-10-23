import { AcademicCapIcon, BriefcaseIcon, ClockIcon, CurrencyDollarIcon, MapPinIcon, TagIcon } from "@heroicons/react/16/solid";
import { FiCheck } from "react-icons/fi";


const JobListing = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-100 min-h-screen">
      {/* Left Section */}
      <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Job Description</h2>
        <p className="text-gray-700 mb-6">
         Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc. 
Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.
        </p>

        <h3 className="text-xl font-semibold mb-2">Key Responsibilities</h3>
       <ul className="space-y-2 mb-6 text-gray-700">
  <li className="flex items-center gap-2">
    <FiCheck className="text-green-500" />
    <span>Lorem ipsum dolor sit amet</span>
  </li>
  <li className="flex items-center gap-2">
    <FiCheck className="text-green-500" />
    <span>Consectetur adipiscing elit</span>
  </li>
  <li className="flex items-center gap-2">
    <FiCheck className="text-green-500" />
    <span>Sed do eiusmod tempor</span>
  </li>
</ul>

        <h3 className="text-xl font-semibold mb-2">Professional Skills</h3>
          <ul className="space-y-2 mb-6 text-gray-700">
  <li className="flex items-center gap-2">
    <FiCheck className="text-green-500" />
    <span>Lorem ipsum dolor sit amet</span>
  </li>
  <li className="flex items-center gap-2">
    <FiCheck className="text-green-500" />
    <span>Consectetur adipiscing elit</span>
  </li>
  <li className="flex items-center gap-2">
    <FiCheck className="text-green-500" />
    <span>Sed do eiusmod tempor</span>
  </li>
</ul>
      </div>

      {/* Right Section */}
     
 <div className="md:w-1/3 mt-6 md:mt-0 md:ml-6 bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">Job Overview</h2>

  <div className="space-y-4 text-gray-700">
    <div className="flex items-start gap-3">
      <BriefcaseIcon className="h-6 w-6 text-[#309689] mt-1" />
      <div>
        <p className="font-semibold text-gray-800">Job Title</p>
        <p>Corporate Solutions Executive</p>
      </div>
    </div>
 <div className="flex items-start gap-3">
      <ClockIcon className="h-6 w-6 text-[#309689] mt-1" />
      <div>
        <p className="font-semibold text-gray-800">Job Type</p>
        <p>Full Time</p>
      </div>
    </div>
    <div className="flex items-start gap-3">
      <TagIcon className="h-6 w-6 text-[#309689] mt-1" />
      <div>
        <p className="font-semibold text-gray-800">Category</p>
        <p>Commerce</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <ClockIcon className="h-6 w-6 text-[#309689] mt-1" />
      <div>
        <p className="font-semibold text-gray-800">Experience</p>
        <p>5 Years</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <AcademicCapIcon className="h-6 w-6 text-[#309689] mt-1" />
      <div>
        <p className="font-semibold text-gray-800">Degree</p>
        <p>Master</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <CurrencyDollarIcon className="h-6 w-6 text-[#309689] mt-1" />
      <div>
        <p className="font-semibold text-gray-800">Salary</p>
        <p>$40,000 – $42,000</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <MapPinIcon className="h-6 w-6 text-[#309689] mt-1" />
      <div>
        <p className="font-semibold text-gray-800">Location</p>
        <p>New York, USA</p>
      </div>
    </div>
  </div>

  {/* Map Placeholder */}
  <div className="mt-6">
    <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-gray-600 rounded-lg">
      Map Placeholder
    </div>
  </div>
</div>

    </div>
  );
};

export default JobListing;
