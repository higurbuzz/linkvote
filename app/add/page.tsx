import Link from "next/link";

export default function Add() {
  return (
    <main>
      <div className="add-form-wrapper">
        <Link className="text-sm font-medium" href="/">
          ← Return to List
        </Link>
        <h2>Add New Link</h2>
        <form className="add-form">
          <label>Link Name:</label>
          <input type="text" placeholder="e.g. Alphabet" required></input>
          <label>Link URL:</label>
          <input type="url" placeholder="e.g. http://abc.xyz" required></input>
          <button type="submit">ADD</button>
        </form>
      </div>
    </main>
  );
}
