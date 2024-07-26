"use client";

import LinkCard from "./LinkCard";
import { Link as LinkType } from "../types";

interface LinkListProps {
  links: LinkType[];
  onVote: (id: string, type: "up" | "down") => void;
  onDelete: (id: string) => void;
}

const LinkList: React.FC<LinkListProps> = ({ links, onVote, onDelete }) => {
  return links.length ? (
    <div>
      <ul>
        {links.map((link) => (
          <LinkCard
            key={link.id}
            link={link}
            onVote={onVote}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  ) : (
    <div className="text-center p-4 font-light text-xl">
      There is no link added.
    </div>
  );
};

export default LinkList;
