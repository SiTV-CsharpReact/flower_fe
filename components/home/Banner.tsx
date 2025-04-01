import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export default function Banner() {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/banner.jpg"
        alt="Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-lg md:text-xl font-light mb-4 animate-subtitle">THE SIGN OF LOVE</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-title">Fleru</h1>
        <Button 
          className="bg-white text-black hover:bg-gray-100 animate-button"
          size="lg"
        >
          LỰA MẪU NGAY
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
} 