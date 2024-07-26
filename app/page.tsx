"use client";

import { useState, useEffect } from "react";
import { Link as LinkType } from "./types";
import LinkList from "./components/LinkList";
import LinkSubmit from "./components/LinkSubmit";
import OrderBySelector from "./components/OrderBySelector";
import Pagination from "./components/Pagination";
import { toast } from "react-toastify";

export default function Home() {
  const [links, setLinks] = useState<LinkType[]>([]);
  const [order, setOrder] = useState("most-voted");
  const [currentPage, setCurrentPage] = useState(1);
  const linksPerPage = 5;

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem("links") || "[]");
    setLinks(storedLinks);
  }, []);

  const handleVote = (id: string, type: "up" | "down") => {
    const updatedLinks = links.map((link) => {
      if (link.id === id) {
        return {
          ...link,
          votes: type === "up" ? link.votes + 1 : link.votes - 1,
          lastVoted: new Date().toISOString(),
        };
      }
      return link;
    });
    setLinks(updatedLinks);
    localStorage.setItem("links", JSON.stringify(updatedLinks));
  };

  const handleSort = (type: "most-voted" | "least-voted" | "latest") => {
    setOrder(type);
  };

  const sortedLinks = links.sort((a, b) => {
    if (order === "most-voted") {
      return (
        b.votes - a.votes ||
        new Date(b.lastVoted).getTime() - new Date(a.lastVoted).getTime()
      );
    } else if (order === "least-voted") {
      return (
        a.votes - b.votes ||
        new Date(b.lastVoted).getTime() - new Date(a.lastVoted).getTime()
      );
    } else {
      return new Date(b.lastVoted).getTime() - new Date(a.lastVoted).getTime();
    }
  });

  const handleDelete = (id: string) => {
    const updatedLinks = links.filter((link) => link.id !== id);
    setLinks(updatedLinks);
    localStorage.setItem("links", JSON.stringify(updatedLinks));
    const removedLink = links.find((link) => link.id === id);
    if (removedLink) {
      toast.success(
        <span>
          <strong>{removedLink.name.toUpperCase()}</strong> removed.
        </span>
      );
    }
  };

  const indexOfLastLink = currentPage * linksPerPage;
  const indexOfFirstLink = indexOfLastLink - linksPerPage;
  const currentLinks = sortedLinks.slice(indexOfFirstLink, indexOfLastLink);

  return (
    <main>
      <LinkSubmit />
      <hr className="h-1 my-4 bg-gray-100 border-0" />
      <OrderBySelector onSortChange={handleSort} />
      <LinkList
        links={currentLinks}
        onVote={handleVote}
        onDelete={handleDelete}
      />
      <Pagination
        currentPage={currentPage}
        totalLinks={links.length}
        linksPerPage={linksPerPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
