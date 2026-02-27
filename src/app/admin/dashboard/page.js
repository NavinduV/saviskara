"use client";
import React from "react";
import AdminSidebar from "../../../components/AdminSideBar";

export default function page() {
  return (
    <>
      <div className="flex flex-row">
        <AdminSidebar />
        <div className="w-full">
        <div className="flex justify-around w-full">
          <div className="flex justify-start shadow-2xl p-2 rounded-lg w-48 ">
            <div>
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/book.png"
                alt="book"
              />
            </div>
            <div>
              <p className="text-xl">10</p>
              <p>Subjects</p>
            </div>
          </div>
          <div className="flex justify-start shadow-2xl p-2 rounded-lg w-48 ">
            <div>
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/camcorder-pro.png"
                alt="camcorder-pro"
              />
            </div>
            <div>
                <p className="text-xl">12</p>
                <p>Recordings</p>
            </div>
          </div>
          <div className="flex justify-start shadow-2xl p-2 rounded-lg w-48 ">
            <div>
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/sheet-of-paper.png"
                alt="sheet-of-paper"
              />
            </div>
            <div>
                <p className="text-xl">
                    20
                </p>
                <p>Papers</p>
            </div>
          </div>
          <div className="flex justify-start shadow-2xl p-2 rounded-lg w-48 ">
            <div>
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/task.png"
                alt="task"
              />
            </div>
            <div>
                <p className="text-xl">
                    23
                </p>
                <p>
                    Notes
                </p>
            </div>
          </div>
        
        </div>
        </div>
      </div>
    </>
  );
}
