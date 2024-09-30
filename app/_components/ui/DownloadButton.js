"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import Spinner from "./Spinner";

export default function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  async function handleDownload(e) {
    e.preventDefault();
    setIsDownloading(true);

    const response = await fetch("/api/resume");
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "nicholas ong.pdf";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);

    setIsDownloading(false);
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`w-full rounded-md bg-secondary py-4 text-sm font-semibold transition-colors ${!isDownloading && "hover:bg-secondary-foreground/10"}`}
    >
      {!isDownloading ? (
        <div className="flex items-center justify-center gap-2">
          <span>Download Resume</span>
          <Download size={16} />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <Spinner size={20} stroke={2} />
        </div>
      )}
    </button>
  );
}
