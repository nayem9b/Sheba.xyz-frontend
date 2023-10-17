"use client";

import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

const page = () => {
  async function Page() {
    const user: User | null = await currentUser();
    console.log(user);
  }

  return <div>Hello</div>;
};

export default page;
