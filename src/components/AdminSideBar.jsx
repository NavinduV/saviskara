"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function AdminSideBar() {

    const [Collapsed, setCollapsed] = useState(false)

    let router = useRouter()
    
  return (
    <Sidebar collapsed={Collapsed}>
      <Menu>
        <MenuItem className="flex justify-center w-full" onClick={()=>setCollapsed(!Collapsed)}><i className="fas fa-bars"/></MenuItem>
        <MenuItem onClick={()=>router.push("/admin/dashboard")} icon={<i className="fas fa-home"/>}> Home </MenuItem>
        <MenuItem onClick={()=>router.push("/admin/subjects")} icon={<i className="fas fa-graduation-cap"/>}> Subjects </MenuItem>
        <MenuItem onClick={()=>router.push("/admin/lessons")} icon={<i className="fab fa-leanpub"/>}> Lessons </MenuItem>
        <MenuItem onClick={()=>router.push("/admin/papers")} icon={<i className="fas fa-scroll"/>}> Papers </MenuItem>
        {/* <MenuItem onClick={()=>router.push("/admin/recordings")} icon={<i className="fas fa-video"/>}> Recordings </MenuItem> */}
        <MenuItem icon={<i className="fas fa-users"></i>}> Users </MenuItem>
        <MenuItem icon={<i className="fas text-red-700 fa-power-off"/>}> Log Out </MenuItem>
      </Menu>
    </Sidebar>
  );
}
