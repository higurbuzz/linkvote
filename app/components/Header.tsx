import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="mx-16 py-4 text-right text-2xl">
        <Link href="/">
          <span className="font-extrabold">Link</span>
          <span className="font-extralight">VOTE</span>
          <span className="font-light ml-2">Challenge</span>
        </Link>
      </div>
      <hr />
    </>
  );
};

export default Header;
