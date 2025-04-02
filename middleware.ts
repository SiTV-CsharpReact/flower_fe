// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const privatePaths = ['/home'];
// Danh sách các route yêu cầu đăng nhập
const authPaths = ['/login', '/forgotPassword'];

const productEditRegex = /^\/products\/\d+\/edit$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get('access_token')?.value;
  // Chưa đăng nhập thì không cho vào private paths
  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  // Đăng nhập rồi thì không cho vào login/register nữa
  if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL('/home', request.url));
  }
  if (pathname.match(productEditRegex) && !sessionToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

// Cấu hình để middleware áp dụng cho tất cả route
export const config = {
  matcher: ['/home', '/login', '/forgotPassword', '/home/:path*'],
};
