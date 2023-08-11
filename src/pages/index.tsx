import Link from "next/link";

export default function Index() {
  return (
    <>
    <h1>Hi, I&rsquo;m Frank!</h1>
    <h2>Let me tell you a little about myself...</h2>
      <h2>
        <Link href="/first">
          First Post
        </Link>
      </h2>
    </>
  );
}