import React from "react";

export default function FilterChips({ tags, activeTag, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {["All", ...tags].map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={`px-3 py-1.5 rounded-full text-sm border transition ${
            activeTag === tag ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}