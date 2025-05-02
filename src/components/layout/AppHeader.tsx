import Link from "next/link";
import ImportaYaLogo from "../icons/ImportaYaLogo";


export default function AppHeader() {
  return (
    <header className="px-4 h-16 border-b">
      <section className="max-w-7xl mx-auto w-full flex items-center justify-between h-full">
        <div className="flex flex-1 basis-0 items-center gap-2">
          <ImportaYaLogo className="size-10" />
          <h1 className="text-2xl font-bold font-roboto">ImportaYa</h1>
        </div>

        <nav className="font-mono">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-1 basis-0 justify-end font-mono">
          <Link href="/login">Login</Link>
        </div>
      </section>
    </header>
  );
}
