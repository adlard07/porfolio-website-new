import { NextResponse } from "next/server";
import { getGithubProjects } from "@/lib/github";

// Server-side route so any GITHUB_TOKEN used for higher rate limits never
// reaches the client bundle. The Projects section itself calls
// lib/github.js directly (no extra network hop), but this route is kept
// available for external tooling or client-side refresh use cases.
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit")) || 6;

  const { projects, source } = await getGithubProjects({ limit });

  return NextResponse.json(
    { projects, source },
    { headers: { "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400" } }
  );
}
