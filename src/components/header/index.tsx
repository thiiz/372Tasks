import { Bell, CalendarRange } from "lucide-react";
import { SearchBar } from "../search_bar";
import { Button } from "../ui/button";
import { DateComponent } from "../date";
import { Logo } from "../logo";
import { SidebarTrigger } from "../ui/sidebar";

export const Header = () => {

  return (
    <header className='fixed top-0 w-full flex shadow-lg py-4 px-4 sm:px-10 bg-[#F8F8F8] font-[sans-serif] min-h-[70px] tracking-wide z-50'>
      <div className='container mx-auto flex flex-wrap items-center justify-between gap-4'>

        <div id="collapseMenu"
          className='max-xl:hidden max-xl:w-full max-xl:fixed max-xl:before:fixed max-xl:before:bg-black max-xl:before:opacity-50 max-xl:before:inset-0 max-xl:before:z-50'>
          <Logo />
        </div>
        <div className="w-full flex flex-1 max-xl:hidden">

          <SearchBar />
        </div>

        <div className="max-xl:block hidden cursor-pointer">
          <Logo />
        </div>

        <div className='flex items-center justify-between ml-auto space-x-6'>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button className="w-7 h-7 sm:w-9 sm:h-9">
              <Bell className="w-full" />
            </Button>
            <Button className="w-7 h-7 sm:w-9 sm:h-9">
              <CalendarRange />
            </Button>
            <DateComponent />
          </div>

        </div>
        <div className="flex items-center xl:hidden w-full space-x-5">
          <SearchBar />
          <SidebarTrigger />
        </div>

      </div>
    </header>
  );
};
