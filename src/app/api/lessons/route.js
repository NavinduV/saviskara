
import { NextResponse } from "next/server";
import {GetLesson} from '../../actions'

export async function GET(request) {
  let sub_id = request.nextUrl.searchParams.get("sub_id")
  if(sub_id){
    let lessons = await GetLesson(parseInt(sub_id))
    return NextResponse.json({"status":"sucess",lessons:lessons});
  }
  else{
    return NextResponse.json({"status":"error","msg":"please set subject_id with your request"});
    
  }
}
