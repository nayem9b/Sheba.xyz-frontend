import { authMiddleware } from "@clerk/nextjs";
import { redirectToSignIn } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: [
    "/",
    "/account",
    "/mybookings",
    "/allusers",
    "/addservice",
    "/purchase",
    "/purchase/:id",
    "/addcategory",
    "/services",
    "/services/:id",
    "/mycart",
    "/allbookings",
    "/allfeedbacks",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
