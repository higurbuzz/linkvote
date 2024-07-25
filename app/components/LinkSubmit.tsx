import Link from "next/link";

const LinkSubmit = () => {
  return (
    <Link href="/add" className="link-submit-wrapper">
      <div className="plus-wrapper">
        <span className="pb-1">+</span>
      </div>
      <div className="submit-text-wrapper">
        <span>SUBMIT A LINK</span>
      </div>
    </Link>
  );
};

export default LinkSubmit;
