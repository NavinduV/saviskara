"use client";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import AdminSideBar from "../../../components/AdminSideBar";
import { GetLessons, GetSubjects,AddLesson,DeleteLesson } from "../../actions";
import Swal from "sweetalert2";
import { DotLoader } from "react-spinners";

export default function page() {
  const [Loading, setLoading] = useState(true);
  const [Lessons, setLessons] = useState();
  const [Subjects, setSubjects] = useState()
  useEffect(() => {
    async function use() {
      let subs = await GetSubjects()
      console.log(subs);
      setSubjects(subs)
      let lessons = await GetLessons();
      console.log(lessons);
      setLessons(lessons);
      console.log(lessons);
      setLoading(false);
    }
    use();
  }, []);

  
  const DeleteLess = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteLesson(data).then((res)=>{
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }).then(async ()=>{
            setLessons(await GetLessons())
          })
        })
      }
    });
  }

  const AddLess = () => {
    Swal.fire({
      title: "Add A Lesson",
      html: `
      <div class='flex flex-col'>
        <select id="swal-input1" class="swal2-select">
        <option selected disabled>Select Subject...</option>
        ${
          Subjects?.map((sub)=>{
            return `<option value="${sub.id}">${sub.name}</option>`
          })
        }
        </select>
        <input id="swal-input2" placeholder="Enter Lesson Name" class="swal2-input">
        <input id="swal-input4" placeholder="Enter Lesson Recording Link" class="swal2-input">
        <select id="swal-input3" class="swal2-select">
        <option selected disabled>Select Grade...</option>
        <option>12</option>
        <option>13</option>
        </select>
      </div>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          "subject_id":document.getElementById("swal-input1").value,
          "lesson_name":document.getElementById("swal-input2").value,
          "grade":document.getElementById("swal-input3").value,
          "link":document.getElementById("swal-input4").value
        }
      }
    }).then(async (res) => {
      if (res.isConfirmed) {
        console.log(res.value);
        let lesson = await AddLesson(res.value)
        console.log(lesson);
        let lessons = await GetLessons()
        setLessons(lessons)
        // let sub = await AddSubject(res.value);
        // Swal.fire({
        //   title: "Sucess!",
        //   text: "Subject Added Successfully!",
        //   icon: "success",
        // }).then(async () => {
        //   setLoading(true);
        //   let subs = await GetLessons();
        //   setLessons(subs);
        //   setLoading(false);
        // });
      }
    });
  };

  const columns = [
    {
      name: "id",
      selector: (row) => row?.id,
    },
    {
      name: "Lesson",
      selector: (row) => row?.name,
    },
    {
      name: "Subject",
      selector: (row) => row?.Subject.name,
    },
    {
      name: "Grade",
      selector: (row) => row?.grade,
    },
    
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-3">
          <button className="p-2 border shadow-lg rounded-md bg-sky-600 text-white">
            <i className="fas fa-pen"></i>
          </button>
          <button onClick={()=>DeleteLess(row)} className="p-2 border shadow-lg rounded-md bg-rose-600 text-white">
            <i className="fas fa-trash"></i>
          </button>
          <a href={row.link} target="_blank">
          <button className="p-2 border shadow-lg rounded-md bg-emerald-500 text-white">
            <i className="fas fa-eye"></i>
          </button>
          </a>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex">
        <AdminSideBar />
        <div className="w-full flex flex-col">
          <div>
            <button
              onClick={() => AddLess()}
              className="m-3 border p-2 font-semibold shadow-xl bg-yellow-500 text-black rounded-lg"
            >
              <i className="fas fa-plus"></i> Add Lesson
            </button>
          </div>
          <DataTable
            progressComponent={<DotLoader color="#36d7b7" />}
            progressPending={Loading}
            columns={columns}
            data={Lessons}
          />
        </div>
      </div>
    </>
  );
}
