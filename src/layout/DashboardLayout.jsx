import Sidebar from '@/components/Sidebar'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import SiteHeader from '@/components/SiteHeader'

export default function DashboardLayout() {
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
      navigate("/login");
    }
  },[navigate])
  return (
    <div className="flex">
           <Sidebar/>
           <div className="flex-1 shrink-0  p-6">
              <SiteHeader/>
               <Outlet/>
           </div>
       </div>
  )
}
