import { Bell, HousePlus, MessageCircle, PackageCheck, Search, Settings,Plus  } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function SiteHeader() {
  return (
<div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
    {/* Search Section */}
    <div className="relative flex-1 sm:flex-none">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-500" size={20}/>
        <input 
            type="text" 
            className="border-zinc-300 border rounded-md py-1.5 ps-10 bg-zinc-100 w-full sm:w-auto" 
            placeholder="Search Events..." 
        />
    </div>
    
    {/* Action Buttons Section */}
    <div className="flex flex-wrap gap-2 sm:gap-4 sm:ms-auto font-medium text-sm items-center">
        {/* Primary Action Buttons - Hidden on mobile, shown as text on tablet+ */}
        <div className="hidden lg:flex gap-4">
            <button className="border border-black rounded-md py-1.5 px-5 active:scale-95 transition-all duration-100 ease-in cursor-pointer whitespace-nowrap">
                New Client <HousePlus size={16} className="inline ms-1"/>
            </button>
            <button className="bg-black text-white rounded-md py-1.5 px-5 active:scale-95 transition-all duration-100 ease-in cursor-pointer whitespace-nowrap">
                New Work Order <PackageCheck size={16} className="inline ms-1"/>
            </button>
        </div>
        
        {/* Tablet View - Icon only buttons */}
        <div className="hidden sm:flex lg:hidden gap-2">
            <button 
                className="border border-black rounded-md p-2 active:scale-95 transition-all duration-100 ease-in cursor-pointer"
                title="New Client"
            >
                <HousePlus size={16}/>
            </button>
            <button 
                className="bg-black text-white rounded-md p-2 active:scale-95 transition-all duration-100 ease-in cursor-pointer"
                title="New Work Order"
            >
                <PackageCheck size={16}/>
            </button>
        </div>
        
        {/* Mobile View - Dropdown Menu */}
        <div className="ms-auto sm:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="border border-black rounded-md py-1.5 px-4 active:scale-95 transition-all duration-100 ease-in cursor-pointer flex items-center gap-2">
                        <Plus size={16} />
                        Create
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem className="cursor-pointer">
                        <HousePlus size={16} className="mr-2" />
                        New Client
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        <PackageCheck size={16} className="mr-2" />
                        New Work Order
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        
        {/* Utility Buttons - Always visible */}
        <div className="flex gap-2 sm:gap-4 items-center">
            <button className="border border-zinc-300 p-2 sm:px-3 rounded-md cursor-pointer hover:bg-zinc-50 transition-colors"> 
                <Settings size={16}/> 
            </button>
            <button className="border border-zinc-300 p-2 sm:px-3 rounded-md cursor-pointer hover:bg-zinc-50 transition-colors"> 
                <MessageCircle size={16}/> 
            </button>
            <button className="border border-zinc-300 p-2 sm:px-3 rounded-md cursor-pointer hover:bg-zinc-50 transition-colors relative"> 
                <Bell size={16}/> 
                <span className="absolute -top-1 -right-1 inline-block rounded-full size-2 bg-red-500"></span>
            </button>
            <img src="/pp.jpg" className="w-8 h-8 sm:w-9 sm:h-9 rounded-md flex-shrink-0" alt="Profile" />
        </div>
    </div>
</div>
  )
}
