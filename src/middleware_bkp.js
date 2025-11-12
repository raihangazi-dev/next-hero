// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     const dummyUserData = {
//         role: "admin",
//         email: "test@admin.com"
//     }
//     let isServicePage = request.nextUrl.pathname.startsWith("/services");
//     let isAdmin = dummyUserData.role == "1admin";
//     if(isServicePage && !isAdmin){
//         return NextResponse.redirect(new URL('/login', request.url))
//     }

//   return NextResponse.next();
// }

