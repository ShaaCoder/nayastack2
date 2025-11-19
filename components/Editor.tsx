"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Important: Load ReactQuill on client-side only
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Editor({ value, onChange }: any) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow p-2">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        className="min-h-[300px]"
      />
    </div>
  );
}
