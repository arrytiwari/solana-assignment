import { Dashboard } from "@/components/dashboard";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

    <div className="relative z-10">
      <Dashboard />
    </div>
    
  </div>
  
  );
}
