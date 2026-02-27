'use client'
import { Button, TextField } from "@mui/material";
import React from "react";
import { SignUpUser,SignInUser } from "../../actions";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"


export default function page() {

  let router = useRouter()

    // const LogIn = async ()=>{
    //     let user = await SignInUser()
    //     if(user){
    //       router.push("/admin/dashboard")
    //     }
    // }

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col p-8 mt-8 rounded-lg shadow-2xl">
        <p className="text-center my-6 px-7">Admin Login</p>
        <div className="flex gap-8 flex-col">
          <TextField variant="outlined" fullWidth label="User Name" />
          <TextField variant="outlined" fullWidth label="Password" />
        </div>
        <div>
          <Button variant="outlined" onClick={()=>signIn()} className="mt-5" fullWidth>Login</Button>
        </div>
      </div>
    </div>
  );
}
