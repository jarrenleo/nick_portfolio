import { NextResponse } from "next/server";
import { getResume } from "@/app/_lib/data-service";

export async function GET() {
  try {
    const resume = await getResume();
    return new NextResponse(resume);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
