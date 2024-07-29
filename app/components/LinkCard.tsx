import Link from "next/link";
import React, { useState } from "react";
import { Link as LinkType } from "../types";
import ConfirmationModal from "./RemoveConfirmationModal";

interface LinkCardProps {
  link: LinkType;
  onVote: (id: string, type: "up" | "down") => void;
  onDelete: (id: string) => void;
}

const LinkCard: React.FC<LinkCardProps> = ({ link, onVote, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsModalOpen(false);
    onDelete(link.id);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="link-item group">
      <div className="point-wrapper">
        <h3>{link.votes}</h3>
        <span>POINTS</span>
      </div>
      <div className="content-wrapper">
        <h3>{link.name}</h3>
        <Link href={link.url}>{`(${link.url})`}</Link>
        <div className="voter-wrapper">
          <button onClick={() => onVote(link.id, "up")} className="voter-up">
            ⬆ Up Vote
          </button>
          <button
            onClick={() => onVote(link.id, "down")}
            className="voter-down"
          >
            ⬇ Down Vote
          </button>
        </div>
        <button
          onClick={handleDelete}
          className="delete-button group-hover:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 511.99"
          >
            <path
              fill="#FC4032"
              fill-rule="nonzero"
              d="M256 0c70.68 0 134.68 28.67 181.01 74.99 46.32 46.32 74.99 110.32 74.99 181S483.33 390.68 437.01 437c-46.33 46.33-110.33 74.99-181.01 74.99-70.68 0-134.68-28.66-181.01-74.99C28.67 390.68 0 326.67 0 255.99c0-70.68 28.67-134.68 74.99-181C121.32 28.67 185.32 0 256 0z"
            />
            <path
              fill="#fff"
              d="M381.4 234.68v42.63c0 10.08-8.3 18.38-18.38 18.38H148.98c-10.08 0-18.38-8.26-18.38-18.38v-42.63c0-10.12 8.26-18.38 18.38-18.38h214.04c10.12 0 18.38 8.33 18.38 18.38z"
            />
          </svg>
        </button>
      </div>

      {isModalOpen && (
        <ConfirmationModal
          message={`${link.name.toUpperCase()}`}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default LinkCard;
