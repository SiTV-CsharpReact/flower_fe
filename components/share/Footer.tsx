import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo và Thông tin liên hệ */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold animate-slide-left">
              Fleru
            </Link>
            <div className="mt-4 space-y-2 text-gray-600 text-sm animate-slide-left">
              <p>20 Thượng Đình, Thanh Xuân,</p>
              <p>Hà Nội.</p>
              <p>fleru.fleru@gmail.com</p>
              <p>0926 945 888</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <Link href="https://instagram.com" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="https://facebook.com" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="https://youtube.com" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link href="https://pinterest.com" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>

          {/* CẦN HỖ TRỢ */}
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4 animate-slide-right">CẦN HỖ TRỢ</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/chinh-sach-mua-hang">Chính sách mua hàng</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/hanh-trinh-don-hang">Hành trình đơn hàng</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/giao-hang">Giao hàng</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/chon-mau">Chọn mẫu</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/doi-tra-bao-hanh">Đổi trả & Bảo hành</Link>
              </li>
            </ul>
          </div>

          {/* DỊCH VỤ */}
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4 animate-slide-right">DỊCH VỤ</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/cam-hoa-theo-yeu-cau">Cắm hoa theo yêu cầu</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/hoa-su-kien">Hoa sự kiện</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/tuyen-dung">Tuyển dụng</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/day-cam-hoa">Dạy cắm hoa</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/mau-moi">Mẫu mới</Link>
              </li>
            </ul>
          </div>

          {/* MẠNG XÃ HỘI */}
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4 animate-slide-right">MẠNG XÃ HỘI</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/tiktok">Tiktok</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/facebook">Facebook</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/instagram">Instagram</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/pinterest">Pinterest</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/shopee">Shopee</Link>
              </li>
            </ul>
          </div>

          {/* BỘ SƯU TẬP */}
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4 animate-slide-right">BỘ SƯU TẬP</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/hoa-cuoi">Hoa cưới</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/hoa-sinh-nhat">Hoa sinh nhật</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/hoa-qua-tang">Hoa quà tặng</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/hoa-checkin">Hoa checkin</Link>
              </li>
              <li className="hover:text-gray-900 transition-colors">
                <Link href="/hoa-su-kien">Hoa sự kiện</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-600">
            <p>© 2021 Funio Furniture Store</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-gray-900">PRIVACY</Link>
              <Link href="/terms" className="hover:text-gray-900">TERMS</Link>
              <Link href="/promo" className="hover:text-gray-900">*PROMO T&CS APPLY (VIEW HERE)</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 