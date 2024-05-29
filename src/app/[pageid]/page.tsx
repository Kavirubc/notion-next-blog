"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ExtendedRecordMap } from "notion-types";
import { NotionPage } from "@/components/NotionPage";
import { rootNotionPageId } from "@/lib/config";

const Page = () => {
    const { pageid } = useParams();
    const [recordMap, setRecordMap] = useState<ExtendedRecordMap | null>(null);

    useEffect(() => {
        const fetchRecordMap = async () => {
            const response = await fetch(`/api/notion-page?pageId=${pageid}`);
            const data = await response.json();
            setRecordMap(data.recordMap);
        };

        if (pageid) {
            fetchRecordMap();
        }
    }, [pageid]);

    if (!recordMap) return <div>Loading...</div>;

    return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
};

export default Page;
