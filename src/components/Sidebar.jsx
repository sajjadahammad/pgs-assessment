import { Building2, Calendar, FileChartColumnIncreasing, House, Layers, LogOut, Package, Settings, TruckElectric, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";

export default function Sidebar() {
    const location = useLocation()
    const navigate = useNavigate()

    const logout = async ()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <div className="bg-zinc-900 w-12 shrink-0 grow-0 py-4 min-h-screen h-full relative">
            <div className="flex justify-center mb-7">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>
            </div>
            <div className="flex gap-8 flex-col h-full items-center ">
                <Link to="/" className={`${location.pathname === "/" ? "bg-white text-black rounded-md p-1" : ""} cursor-pointer`}>
                    <House size={18} />
                </Link>
                <Calendar size={18} className="text-zinc-400" />
                <Package size={18} className="text-zinc-400" />
                <Layers size={18} className="text-zinc-400" />
                <Building2 size={18} className="text-zinc-400" />
                <TruckElectric size={18} className="text-zinc-400" />
                <FileChartColumnIncreasing size={18} className="text-zinc-400"/>
                <User size={18} className="text-zinc-400"/>
                <Settings size={18} className="text-zinc-400"/>
                <LogOut onClick={logout} size={18} className="absolute bottom-4 text-red-400 cursor-pointer" />
            </div>


        </div>
    )
}
