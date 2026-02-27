"use client";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import AdminSideBar from "../../../components/AdminSideBar";
import { GetSubjects, AddSubject, UpdateSubject, DeleteSubject } from "../../actions";
import Swal from "sweetalert2";
import { DotLoader } from "react-spinners";

export default function page() {
  const [Loading, setLoading] = useState(true);
  const [Subjects, setSubjects] = useState();
  useEffect(() => {
    async function use() {
      let subs = await GetSubjects();
      setSubjects(subs);
      console.log(subs);
      setLoading(false);
    }
    use();
  }, []);

  const DeleteSub = (data) => {
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
          DeleteSubject(data).then((res)=>{
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }).then(async ()=>{
              setSubjects(await GetSubjects())
            })
          })
        }
      });
    }

  const AddSub = () => {
    Swal.fire({
      title: "Add New Subject",
      input: "text",
      allowEscapeKey: false,
      allowOutsideClick: false,
      showCancelButton: true,

      inputPlaceholder: "Enter Subject Name..",
    }).then(async (res) => {
      if (res.isConfirmed) {
        let sub = await AddSubject(res.value);
        Swal.fire({
          title: "Sucess!",
          text: "Subject Added Successfully!",
          icon: "success",
        }).then(async () => {
          setLoading(true);
          let subs = await GetSubjects();
          setSubjects(subs);
          setLoading(false);
        });
      }
    });
  };

  const UpdateSub = async (data) => {
    Swal.fire({
      title: "Update Subject",
      input: "text",
      inputValue: data.name, // Pre-fill with current name
      allowEscapeKey: false,
      allowOutsideClick: false,
      showCancelButton: true,
      inputPlaceholder: "Enter new Subject Name..",
    }).then(async (res) => {
      if (res.isConfirmed) {
        try {
          await UpdateSubject(data.id, { name: res.value });
          Swal.fire({
            title: "Success!",
            text: "Subject Updated Successfully!",
            icon: "success",
          }).then(async () => {
            setLoading(true);
            let subs = await GetSubjects();
            setSubjects(subs);
            setLoading(false);
          });
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to update the subject.",
            icon: "error",
          });
        }
      }
    });
  };


    const columns = [
      {
        name: 'id',
        selector: (row) => row?.id,
      },
      {
        name: 'Subject',
        selector: (row) => row?.name,
      },
      {
        name: 'Actions',
        cell: (row) => (
          <div className="flex gap-3">
            <button
              onClick={() => UpdateSub(row)}
              className="p-2 border shadow-lg rounded-md bg-sky-600 text-white"
            >
              <i className="fas fa-pen"></i>
            </button>
            <button
              onClick={() => DeleteSub(row)}
              className="p-2 border shadow-lg rounded-md bg-rose-600 text-white"
            >
              <i className="fas fa-trash"></i>
            </button>
            <button className="p-2 border shadow-lg rounded-md bg-emerald-500 text-white">
              <i className="fas fa-eye"></i>
            </button>
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
                onClick={() => AddSub()}
                className="m-3 border p-2 font-semibold shadow-xl bg-yellow-500 text-black rounded-lg"
              >
                <i className="fas fa-plus"></i> Add Subject
              </button>
            </div>
            <DataTable
              progressComponent={<DotLoader color="#36d7b7" />}
              progressPending={Loading}
              columns={columns}
              data={Subjects}
            />
          </div>
        </div>
      </>
    );
  

}



