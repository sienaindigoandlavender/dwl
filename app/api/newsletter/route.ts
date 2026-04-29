import { NextResponse } from "next/server";
import { getNexusClient } from "@/lib/supabase";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const email =
    typeof body === "object" && body !== null && "email" in body
      ? String((body as { email: unknown }).email).trim().toLowerCase()
      : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const client = getNexusClient();
  if (!client) {
    return NextResponse.json({ ok: true, queued: false });
  }

  const { error } = await client
    .from("newsletter_subscribers")
    .upsert(
      { email, site: "dancewithlions", source: "footer" },
      { onConflict: "email,site", ignoreDuplicates: true }
    );

  if (error) {
    return NextResponse.json({ error: "Could not save subscription." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
