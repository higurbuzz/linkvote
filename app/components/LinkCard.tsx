import Link from "next/link";
import React from "react";

interface LinkCardProps {
  points: number;
  name: string;
  url: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ points, name, url }) => {
  return (
    <div className="link-item">
      <div className="point-wrapper">
        <h3>{points}</h3>
        <span>POINTS</span>
      </div>
      <div className="content-wrapper">
        <h3>{name}</h3>
        <Link href={url}>{`(${url})`}</Link>
        <div className="voter-wrapper">
          <button className="voter-up">⬆ Up Vote</button>
          <button className="voter-down">⬇ Down Vote</button>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
