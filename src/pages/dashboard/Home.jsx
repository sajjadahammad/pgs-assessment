import { Network } from "lucide-react";


export default function Home() {
  return (
    <div>
      <h6 className="font-medium"> <Network className="inline mr-2 text-zinc-600" size={15}/> Dashboard</h6>
      <h1 className="text-3xl font-semibold pt-4">Platform Dasboard</h1>
      <div className="space-y-4">
  {/* First Row */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
    <div className="bg-zinc-200 rounded-md h-72 md:col-span-2"></div>
    <div className="bg-zinc-200 rounded-md h-72"></div>
  </div>
  
  {/* Second Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="bg-zinc-200 rounded-md h-72"></div>
    <div className="bg-zinc-200 rounded-md h-72"></div>
    <div className="bg-zinc-200 rounded-md h-72 sm:col-span-2 lg:col-span-1"></div>
  </div>
</div>
    </div>
  )
}
