"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { ExtendedRecordMap } from "notion-types";
import { NotionPage } from "@/components/NotionPage";
import { rootNotionPageId } from "@/lib/config";

const Page = () => {
  const [recordMap, setRecordMap] = useState<ExtendedRecordMap | null>(null);

  useEffect(() => {
    const fetchRecordMap = async () => {
      const response = await fetch("/api/notion-page");
      const data = await response.json();
      setRecordMap(data.recordMap);
    };

    fetchRecordMap();
  }, []);

  if (!recordMap) return <div>Loading...</div>;

  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
};

export default Page;
