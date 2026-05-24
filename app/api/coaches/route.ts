import { db } from "@/db";
import { coaches } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allCoaches = await db.select().from(coaches);
    return NextResponse.json(allCoaches);
  } catch (error) {
    console.error("Error fetching coaches:", error);
    return NextResponse.json(
      { error: "Failed to fetch coaches" },
      { status: 500 },
    );
  }
}
