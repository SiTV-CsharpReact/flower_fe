'use client'
import { useEffect, useState } from 'react';
import ProductCard from '@/components/home/ProductCard';
import Filter from '@/components/layouts/Filter';
import Link from 'next/link';
import Loading from './loading';

interface Product {
  id: number;
  name: string;
  price: number;
  pictureUrl: string;
  type: string;
  brand: string;
}

const API_URL = 'https://localhost:2210/api/Products';

const categories = ['Tất cả', 'Boots', 'Boards', 'Gloves', 'Hats'];
const sortOptions = [
  { name: 'Phổ biến nhất', value: 'popular' },
  { name: 'Giá: Thấp đến cao', value: 'price-asc' },
  { name: 'Giá: Cao đến thấp', value: 'price-desc' }
];

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // State cho filter & pagination
  const [orderBy, setOrderBy] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [types, setTypes] = useState<string>('');
  const [brands, setBrands] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize] = useState<number>(10); // Giữ cố định số sản phẩm mỗi trang

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      const queryParams = new URLSearchParams({
        ...(orderBy && { OrderBy: orderBy }),
        ...(searchTerm && { SearchTerm: searchTerm }),
        ...(types && { Types: types }),
        ...(brands && { Brands: brands }),
        PageNumber: pageNumber.toString(),
        PageSize: pageSize.toString(),
      });

      try {
        const response = await fetch(`${API_URL}?${queryParams.toString()}`);
        if (!response.ok) {
          throw new Error('Lỗi khi tải dữ liệu');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [orderBy, searchTerm, types, brands, pageNumber, pageSize]);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
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
                onClick={() => setTypes(category === 'Tất cả' ? '' : category)}
                className={`text-sm font-medium ${
                  types === category ? 'text-black font-bold' : 'text-gray-700 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Sắp xếp theo</span>
            <select
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
              className="rounded-md border-gray-300 py-1.5 text-sm font-medium text-gray-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Box */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border-gray-300 p-2 text-sm"
          />
        </div>

        {/* Product grid */}
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          <div className="lg:col-span-1">
            <Filter />
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id.toString()}
                name={product.name}
                price={product.price}
                image={product.pictureUrl}
                category={product.type}
              />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center">
          <nav className="flex items-center space-x-2" aria-label="Pagination">
            <button
              disabled={pageNumber === 1}
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Trước
            </button>
            <span className="px-3 py-2 text-sm font-medium">{pageNumber}</span>
            <button
              onClick={() => setPageNumber((prev) => prev + 1)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Sau
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
