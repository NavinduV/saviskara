// app/api/route.js 👈🏽

import { NextResponse } from "next/server";
import {GetSubjects} from '../../actions'

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  let subs = await GetSubjects()
  return NextResponse.json(subs);
}


// Same logic to add a `PATCH`, `DELETE`...