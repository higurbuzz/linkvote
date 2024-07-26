"use client";

import Link from "next/link";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function Add() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLink = {
      id: Date.now().toString(),
      name: name,
      url: url,
      votes: 0,
      lastVoted: new Date().toISOString(),
    };
    const storedLinks = JSON.parse(localStorage.getItem("links") || "[]");
    storedLinks.push(newLink);
    localStorage.setItem("links", JSON.stringify(storedLinks));
    toast.success(
      <span>
        <strong>{name.toUpperCase()}</strong> added!
      </span>
    );
    setName("");
    setUrl("");
  };

  return (
    <main>
      <div className="add-form-wrapper">
        <Link className="text-sm font-medium" href="/">
          ← Return to List
        </Link>
        <h2>Add New Link</h2>
        <form onSubmit={handleSubmit} className="add-form">
          <label htmlFor="name">Link Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Alphabet"
            autoComplete="off"
            required
          />
          <label htmlFor="url">Link URL:</label>
          <input
            id="url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="e.g. http://abc.xyz"
            autoComplete="off"
            required
          />
          <button type="submit">ADD</button>
        </form>
      </div>
    </main>
  );
}
