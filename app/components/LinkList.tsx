"use client";

import { useState, useEffect } from "react";
import LinkCard from "./LinkCard";

interface Link {
  points: number;
  name: string;
  url: string;
}

const LinkList = () => {
  const links: Link[] = [
    { points: 6, name: "Hacker News", url: "https://news.ycombinator.com/" },
    { points: 4, name: "Product Hunt", url: "https://producthunt.com/" },
    { points: 4, name: "REDDIT", url: "https://www.reddit.com/" },
  ];

  return (
    <div>
      <ul>
        {links.map((link, index) => (
          <LinkCard name={link.name} points={link.points} url={link.url} />
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
