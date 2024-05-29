import { NextResponse } from "next/server";
import { rootNotionPageId } from "@/lib/config";
import notion from "@/lib/notion";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const pageId = searchParams.get("pageId") || rootNotionPageId;
    const recordMap = await notion.getPage(pageId);

    return NextResponse.json({ recordMap });
}
