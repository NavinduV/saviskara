"use client";
import React, { useEffect, useState } from "react";
import { GetUsers, GetPapers } from "../actions";

export default function page() {
  const [Users, setUsers] = useState();
  const [Papers, setPapers] = useState();

  useEffect(() => {
    async function FetchPapers() {
      await GetPapers().then((papers) => {
        setPapers(papers);
        console.log(papers);
      });
      await GetUsers().then((users) => {
        setUsers(users);
        console.log(users[0]);
      });
      //   setUsers(users);
    }
    FetchPapers();
  }, []);

  return (
    <div className="page-min-h flex flex-col items-center text-white pt-10">
      <p className="text-3xl text-center">Science For Technology</p>
      <p className="text-center">Past Papers</p>
      <div className="ms-8">
        {Papers?.map((paper) => {
          return (
            <div className="flex  flex-col gap-3 py-3">
              <p className="text-2xl">
                {paper?.subject?.name} - {paper?.year} Advanced Level
                Examination
              </p>
              <div className="flex text-xs gap-5">
                <p>Sinhala</p>
                <p>English</p>
                <p>Tamil</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
