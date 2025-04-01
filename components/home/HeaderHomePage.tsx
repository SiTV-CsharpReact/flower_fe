import Link from "next/link"
import { ShoppingCart, Heart, User } from "lucide-react"
import { Button } from "../ui/button"
import { SignInForm } from "../auth/SignInForm"
import { useState } from "react"

export default function HeaderHomePage() {
  const [showSignIn, setShowSignIn] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Fleru
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-gray-200 transition-colors"
            >
              Trang chủ
            </Link>
            <Link 
              href="/products" 
              className="text-white hover:text-gray-200 transition-colors"
            >
              Sản phẩm
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-gray-200 transition-colors"
            >
              Giới thiệu
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-gray-200 transition-colors"
            >
              Liên hệ
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setShowSignIn(true)}
            >
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                0
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>

      <SignInForm 
        open={showSignIn} 
        onOpenChange={setShowSignIn}
      />
    </header>
  )
} 