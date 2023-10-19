"use client";

import { useGetAllFeedbacksQuery } from "@/redux/api/feedbackApi";
import React from "react";

const AllFeedbacks = () => {
  const { data: allFeedbacks } = useGetAllFeedbacksQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  console.log(allFeedbacks);

  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            {allFeedbacks?.data?.map((feedback: any) => (
              <div key={feedback.id}>
                <div className="mb-8 sm:break-inside-avoid">
                  <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Man"
                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        className="h-14 w-14 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        {feedback?.email}
                      </p>
                    </div>

                    <p className="mt-4 text-gray-700">{feedback.feedback}</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllFeedbacks;
