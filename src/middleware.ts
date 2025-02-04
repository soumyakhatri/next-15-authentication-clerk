import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// const isProtectedRoute = createRouteMatcher(['/user-profile'])
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', 'sign-out(.*)', "/sign-up(.*)"])
const isAdminRoute = createRouteMatcher(['/admin(.*)'])


export default clerkMiddleware(async (auth, req) => {
  // if a user goes to any URL included in isProtectedRoute without signing-in then the user will be redirected to the clerk's sign in page
  // if (isProtectedRoute(req)) {
  //   await auth.protect()
  // }

  // if a user goes to any URL NOT included in isPublicRoute without signing-in then the user will be redirected to the clerk's sign in page
  if (!isPublicRoute(req)) {  
    await auth.protect()
  }

  // this if you want to have more control and if you want to add custom logic.
  // const authResult = await auth()
  // const { userId, redirectToSignIn } = authResult
  // if(!userId && !isPublicRoute(req)){
  //   // custom logic here
  //   return redirectToSignIn() // return statement is required here
  // }

  if(isAdminRoute(req) && (await auth()).sessionClaims?.metadata.role !== "admin"){
    const url = new URL("/", req.url)
    return NextResponse.redirect(url)
  }
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

// The (.*) in route patterns is a regular expression that means "match anything that follows". Let's break it down:
// / matches exactly the home route
// /sign-in(.*) matches:
// /sign-in
// /sign-in/
// /sign-in/anything
// /sign-in/something/else
// etc.
// /sign-out(.*) similarly matches:
// /sign-out
// /sign-out/
// /sign-out/callback
// etc.


// While they might seem similar, `auth.protect()` and `redirectToSignIn()` serve different purposes:
// auth.protect():
// Is a middleware function that blocks access to protected routes
// Throws an error if the user isn't authenticated
// More comprehensive security measure
// Should be used for protecting routes at the middleware level
// Cannot be bypassed client-side

// redirectToSignIn():
// Redirects the user to the sign-in page
// Does not throw an error if the user isn't authenticated
// Less comprehensive security measure
// Should be used for redirecting users to the sign-in page
// Can be bypassed client-side
// Is a navigation helper function
// Simply redirects the user to the sign-in page
// More of a UX function than a security measure
// Can be used anywhere in your application
// Doesn't actually protect the route, just redirects