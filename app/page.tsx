import Image from "next/image";
// import Link from "next/link";
import HeaderHomePage from "@/components/HeaderHomePage";

export default function Home() {
  return (
    <main className="relative">
      {/* Header Banner */}
      <div className="relative h-screen bg-lime-100">
        {/* Banner Image */}
        <div className="absolute inset-0 w-full h-full">     
            <Image 
              src="/anhbia8.jpg" 
              alt="Tulip flowers"
              fill
              className="object-cover"
            />
        </div>

        {/* Content Layer */}
       <HeaderHomePage/>
      </div>
    </main>
  );
}
