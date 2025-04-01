import ProductCard from '@/components/home/ProductCard';
import Filter from '@/components/layouts/Filter';
import Link from 'next/link';
import { Suspense } from 'react'
import Loading from './loading';
// Mock data - sau này sẽ được thay thế bằng dữ liệu thật từ API
const products = [
  {
    id: '1',
    name: 'Bó Hoa Hồng Đỏ',
    price: 599000,
    image: '/products/hoa1.jpg',
    category: 'Hoa Sinh Nhật'
  },
  {
    id: '2',
    name: 'Bó Hoa Tulip Mix',
    price: 799000,
    image: '/products/hoa2.jpg',
    category: 'Hoa Tình Yêu'
  },
  {
    id: '3',
    name: 'Giỏ Hoa Hồng Pastel',
    price: 899000,
    image: '/products/hoa3.jpg',
    category: 'Hoa Sinh Nhật'
  },
  {
    id: '4',
    name: 'Bó Hoa Cẩm Tú Cầu',
    price: 699000,
    image: '/products/hoa4.jpg',
    category: 'Hoa Tình Yêu'
  },
  // Thêm nhiều sản phẩm khác...
];

const categories = [
  'Tất cả',
  'Hoa Sinh Nhật',
  'Hoa Tình Yêu',
  'Hoa Cưới',
  'Hoa Khai Trương',
  'Hoa Chia Buồn'
];

const sortOptions = [
  { name: 'Phổ biến nhất', value: 'popular' },
  { name: 'Đánh giá cao nhất', value: 'rating' },
  { name: 'Mới nhất', value: 'newest' },
  { name: 'Giá: Thấp đến cao', value: 'price-asc' },
  { name: 'Giá: Cao đến thấp', value: 'price-desc' },
];

export default function ShopPage() {
  return (
   <Suspense fallback={<Loading/>}>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="pb-12">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 text-center">Shop</h1>
          <p className="mt-4 text-base text-gray-500 text-center">
          <Link href="/">Home</Link> &gt; Shop
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center space-x-6">
            {categories.map((category) => (
              <button
                key={category}
                className="text-sm font-medium text-gray-700 hover:text-black"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Sắp xếp theo</span>
            <select className="rounded-md border-gray-300 py-1.5 text-sm font-medium text-gray-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black">
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product grid */}
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
  {/* Cột filter */}
  <div className="lg:col-span-1">
    <Filter />
  </div>

  {/* Cột danh sách sản phẩm */}
  <div className="lg:col-span-3 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        category={product.category}
      />
    ))}
  </div>
</div>


        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center">
          <nav className="flex items-center space-x-2" aria-label="Pagination">
            <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Trước
            </button>
            <button className="rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-900">
              1
            </button>
            <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Sau
            </button>
          </nav>
        </div>
      </div>
    </div>
    </Suspense>
  );
} 