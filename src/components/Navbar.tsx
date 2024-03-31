
const Navbar = () => {
    
    return (
      <div className="border-3 h-full w-full border-r border-[#E5EAF2]">
        <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
        <div className="border-b border-[#E5EAF2] flex justify-start">
          <div className="lg:block p-4 hidden relative max-w-xs h-16 bg-white justify-between items-center px-2 ">
            <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
              <span className="justify-center items-center flex">
                <span className="justify-center items-center flex">
                  <span className="items-center justify-center flex">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0
                  11-14 0 7 7 0 0114 0z"/></svg>
                  </span>
                </span>
              </span>
            </p>
            <input placeholder="Type to search" type="search" className="focus:outline-none
            sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"/>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default Navbar;
