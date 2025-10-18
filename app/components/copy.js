"use client";
import { useState } from "react";
import { Copy } from "lucide-react";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "zeyadmaher177@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-700 text-white font-medium hover:bg-red-800 transition"
    >
      <Copy size={18} />
      {copied ? "Copied!" : "Copy Email"}
    </button>
  );
}
