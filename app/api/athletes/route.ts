import { db } from "@/db";
import { athletes } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allAthletes = await db.select().from(athletes);
    return NextResponse.json(allAthletes);
  } catch (error) {
    console.error("Error fetching athletes:", error);
    return NextResponse.json(
      { error: "Failed to fetch athletes" },
      { status: 500 },
    );
  }
}
