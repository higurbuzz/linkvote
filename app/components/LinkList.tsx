"use client";

import LinkCard from "./LinkCard";

interface Link {
  id: number;
  points: number;
  name: string;
  url: string;
}

const LinkList = () => {
  const links: Link[] = [
    {
      id: 0,
      points: 6,
      name: "Hacker News",
      url: "https://news.ycombinator.com/",
    },
    { id: 1, points: 4, name: "Product Hunt", url: "https://producthunt.com/" },
    { id: 2, points: 4, name: "REDDIT", url: "https://www.reddit.com/" },
  ];

  return (
    <div>
      <ul>
        {links.map((link, index) => (
          <LinkCard
            key={link.id}
            name={link.name}
            points={link.points}
            url={link.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
