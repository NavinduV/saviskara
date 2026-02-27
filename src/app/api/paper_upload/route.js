
import { NextResponse } from "next/server";
import {GetLessons} from '../../actions'

export async function POST(request) {
    let res = await request.json()
    console.log(res);
    return NextResponse.json({"status":"sucess"});
}
