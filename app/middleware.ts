import { authMiddleware } from "@clerk/nextjs";
import { redirectToSignIn } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: [
    "/",
    "/purchase/:id",
    "/services",
    "/services/:id",
    "/allservices",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
