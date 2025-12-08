import React from 'react';
import { Mic, Image as ImageIcon, FileText, Link2, Home, User, Menu, CheckSquare, Ellipsis, ListTodo } from 'lucide-react';

export const PhoneMockup = ({ className }) => {
  return (
    <div className={`relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl ${className}`}>
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

      {/* Dynamic Island */}
      <div className="absolute top-0 w-full flex justify-center z-20 pt-2">
        <div className="w-32 h-8 bg-black rounded-full"></div>
      </div>

      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#FAFAFA] relative flex flex-col">

        {/* Status Bar */}
        <div className="h-12 w-full flex justify-between items-center px-6 pt-2 text-[10px] font-bold text-gray-900">
          <span className='font-[AksharRegular]'>11:09</span>
          <div className="flex gap-1">
            <div className="w-4 h-2.5 border border-gray-900 rounded-[2px]"></div>
          </div>
        </div>

        {/* Header */}
        <div className="mt-4 mb-4 text-center">
          <h1 className="text-4xl font-[SweetApricot] text-gray-900">Essential Space</h1>
        </div>

        {/* ------ Smaller Feature Grid ------ */}
        <div className="grid grid-cols-2 gap-3 px-4 overflow-y-auto no-scrollbar pb-20">

          <div className="bg-white p-3 rounded-2xl shadow-sm flex flex-col gap-2 h-28 justify-between">
            <Mic className="w-6 h-6 text-black" strokeWidth={1.5} />
            <div>
              <h3 className="font-[AksharSemiBold] text-sm">Voice Notes</h3>
              <p className="text-[9px] font-[AksharRegular] text-gray-500 leading-tight">Record and manage voice notes.</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-2xl shadow-sm flex flex-col gap-2 h-28 justify-between">
            <ImageIcon className="w-6 h-6 text-black" strokeWidth={1.5} />
            <div>
              <h3 className="font-[AksharSemiBold] text-sm">Image Notes</h3>
              <p className="text-[9px] font-[AksharRegular] text-gray-500 leading-tight">Capture photo notes easily.</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-2xl shadow-sm flex flex-col gap-2 h-28 justify-between">
            <FileText className="w-6 h-6 text-black" strokeWidth={1.5} />
            <div>
              <h3 className="font-[AksharSemiBold] text-sm">Text Notes</h3>
              <p className="text-[9px] font-[AksharRegular] text-gray-500 leading-tight">Write and edit text notes.</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-2xl shadow-sm flex flex-col gap-2 h-28 justify-between">
            <Link2 className="w-6 h-6 text-black" strokeWidth={1.5} />
            <div>
              <h3 className="font-[AksharSemiBold] text-sm">Save URLs</h3>
              <p className="text-[9px] font-[AksharRegular] text-gray-500 leading-tight">Bookmark and organize links.</p>
            </div>
          </div>

        </div>

        {/* Bottom Navigation */}
        {/* Bottom Navigation */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="bg-white rounded-3xl shadow-md border border-gray-200 flex items-center justify-between px-8 py-3">

            {/* Home (Active) */}
            <button className="flex flex-col items-center text-black">
              <Home className="w-6 h-6" strokeWidth={2} />
              <span className="text-[10px] font-[AksharMedium] mt-1">Home</span>
            </button>

            {/* Tasks */}
            <button className="flex flex-col items-center text-gray-500 hover:text-black transition-colors">
              <div className=" border-2 rounded-md border-gray-500">
                <ListTodo className="w-6 h-6 p-1" strokeWidth={2} />
              </div>
              <span className="text-[10px] font-[AksharMedium] mt-1">Tasks</span>
            </button>

            {/* More */}
            <button className="flex flex-col items-center text-gray-500 hover:text-black transition-colors">
              <div className=" border-2 rounded-md border-gray-500">
                <Ellipsis className="w-6 h-6 p-1" strokeWidth={2} />
              </div>
              <span className="text-[10px] font-[AksharMedium] mt-1">More</span>
            </button>

          </div>
        </div>


      </div>
    </div>
  );
};
