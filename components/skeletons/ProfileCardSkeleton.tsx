import React from "react";

const ProfileCardSkeleton = () => {
  return (
    <article className="user-card">
      <div className="card-bookmark"></div>
      <div className="flex flex-col mt-16 gap-10">
        <section className="flex gap-6 items-center">
          <div className="size-36 border-8 border-solid border-gray-600 rounded-full">
            <div className="h-[130] bg-gray-500 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-1">
            <p>Verified Student</p>
            <h2 className="h-5 w-full bg-gray-500 rounded-md animate-pulse"></h2>
            <p className="h-5 w-full bg-gray-500 rounded-md animate-pulse"></p>
          </div>
        </section>
        <section className="flex flex-col gap-1">
          <h3>University</h3>
          <h2 className="h-5 w-full bg-gray-500 rounded-md animate-pulse"></h2>
        </section>
        <section className="flex flex-col gap-1">
          <h3>Student ID</h3>
          <h2 className="h-5 w-full bg-gray-500 rounded-md animate-pulse"></h2>
        </section>
        <div className="h-[330] bg-gray-500 rounded-lg animate-pulse"></div>
      </div>
    </article>
  );
};

export default ProfileCardSkeleton;
