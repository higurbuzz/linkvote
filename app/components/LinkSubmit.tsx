import Link from "next/link";

const LinkSubmit = () => {
  return (
    <Link href="/" className="link-submit-wrapper">
      <div className="plus-wrapper">
        <span>+</span>
      </div>
      <div className="submit-text-wrapper">
        <span>SUBMIT A LINK</span>
      </div>
    </Link>
  );
};

export default LinkSubmit;
