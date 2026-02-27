"use client";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import AdminSideBar from "../../../components/AdminSideBar";
import { GetLessons, GetSubjects, AddLesson,GetPapers,AddPaper } from "../../actions";
import Swal from "sweetalert2";
import { DotLoader } from "react-spinners";
import axios from "axios";
import {UploadFile} from "../../../../firebaseConfig"

export default function page() {
  const [Loading, setLoading] = useState(true);
  const [Papers, setPapers] = useState();
  const [Subjects, setSubjects] = useState();
  useEffect(() => {
    async function use() {
      let subs = await GetSubjects();
      setSubjects(subs);
      let papers = await GetPapers()
      setPapers(papers)
      console.log(papers);
      setLoading(false);
    }
    use();
  }, []);

  const AddLess = () => {
    Swal.fire({
      title: "Add Paper",
      html: `
      <div class='flex flex-col'>
        <select id="swal-input1" class="swal2-select">
        <option selected disabled>Select Subject...</option>
        ${Subjects?.map((sub) => {
          return `<option value="${sub.id}">${sub.name}</option>`;
        })}
        </select>
        <input type='file' id="swal-input2" class="swal2-file">
        <input type="number" id="swal-input3" value="2020" id="swal-input3" class="swal2-input">
      </div>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          subject_id: document.getElementById("swal-input1").value,
          paper: document.getElementById("swal-input2").files[0],
          year: document.getElementById("swal-input3").value,
        };
      },
    }).then(async (res) => {
      if (res.isConfirmed) {
        console.log(res.value.paper);
        let url = await UploadFile(res.value.paper)
        console.log(url);
        AddPaper({sub:res.value.subject_id,year:res.value.year,link:url})
        // AddPaper(res.value)
        // axios.post("http://localhost:3000/api/paper_upload",res.value)
        // let lesson = await AddLesson(res.value);
        // console.log(lesson);
        // let lessons = await GetLessons();
        // setLessons(lessons);
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
      name: "Year",
      selector: (row) => row?.year,
    },
    {
      name: "Subject",
      selector: (row) => row?.subject?.name,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-3">
          <button className="p-2 border shadow-lg rounded-md bg-sky-600 text-white">
            <i className="fas fa-pen"></i>
          </button>
          <button className="p-2 border shadow-lg rounded-md bg-rose-600 text-white">
            <i className="fas fa-trash"></i>
          </button>
          <a  download={`${row?.subject?.name} - ${row?.year}`} href={row?.link}>
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
              <i className="fas fa-plus"></i> Add Paper
            </button>
          </div>
          <DataTable
            progressComponent={<DotLoader color="#36d7b7" />}
            progressPending={Loading}
            columns={columns}
            data={Papers}
          />
        </div>
      </div>
    </>
  );
}

