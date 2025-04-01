import Link from 'next/link';

const HeaderHomePage = () => {
  return (
    <div className="relative z-10 text-white h-full flex flex-col ">
          {/* Top Header */}
          <div className="py-2 px-4 shadow-sm">
            <div className="container mx-auto flex justify-between items-center text-sm">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  89 Láng Hạ
                </span>
                <span className="flex items-center px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  fleru.fleru@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <Link href="/my-account">My Account</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/wishlist">Wishlist</Link>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="">
            <div className="container mx-auto px-4 py-4 2xl:px-0">
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-7 flex items-center space-x-8 text-xs">
                  <Link href="/" className="text-2xl font-bold">Fleru</Link>
                  <nav className="flex items-center space-x-8 pt-2">
                    <Link href="/" className="font-medium relative group">
                      <span>TRANG CHỦ</span>
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"></span>
                    </Link>
                    <Link href="/shop" className="font-medium relative group">
                      <span>SHOP</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/lua-theo-su-kien" className="font-medium relative group">
                      <span>LỰA THEO SỰ KIỆN</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/lua-theo-gia" className="font-medium relative group">
                      <span>LỰA THEO GIÁ</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </nav>
                </div>
                
                <div className="col-span-5 flex items-center justify-end space-x-4">
                  <button className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  <button className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                  <button className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="p-2 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Banner Content */}
          <div className="absolute top-2/5 left-1/6">
            <div className="flex flex-col">
              <h2 className="text-xs mb-1 animate-subtitle animate-slide-left">THE SIGN OF LOVE</h2>
              <h1 className="text-6xl font-bold mb-1 animate-title animate-bounce-in">Fleru</h1>
              <button className="bg-black text-xs text-white px-4 py-3 transition-all duration-300 hover:bg-white hover:text-black hover:cursor-pointer group flex items-center animate-button">
                <span className="text-xs">LỰA MẪU NGAY</span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-4 w-4 ml-2 transform transition-all duration-300 group-hover:translate-x-1 animate-arrow" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
  );
};

export default HeaderHomePage; 