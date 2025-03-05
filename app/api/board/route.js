import { auth } from "@/app/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = req.json();
    if (!body.name)
      return NextResponse.json(
        { error: "brand name not found" },
        { status: 200 }
      );
  } catch (err) {
    console.log(err);
  }
  const session = await auth();
  if (!session)
    return NextResponse.json({ error: "not authenticated" }, { status: "401" });
}
