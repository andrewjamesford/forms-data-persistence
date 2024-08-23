import { usePath } from "crossroad";

export default function Header() {
  const path = usePath();
  const stepArray = path[0]?.split("/");
  const page = stepArray[1] || "";

  return (
    <>
      <header className="flex flex-col md:flex-row justify-between px-4 py-2 bg-white border-b">
        <div className="text-center mb-4 md:space-x-4">
          <a
            href="/"
            className="text-sm text-black text-center inline-flex items-center mt-2"
          >
            <img
              src="/gavel.svg"
              alt="Logo"
              width="32"
              height="32"
              className="inline w-20 md:w-10"
            />
            <span className="text-3xl md:text-lg">SOLD!</span>
          </a>
        </div>
        <div className="flex flex-col text-center md:flex-row md:text-left gap-4 py-2 md:py-4">
          <a
            href="/state/1"
            className={
              page === "state"
                ? "font-bold text-sm text-gray-600"
                : "text-sm text-gray-600"
            }
          >
            React State
          </a>
          <a
            href="/hook-form/1"
            className={
              page === "hook-form"
                ? "font-bold text-sm text-gray-600"
                : "text-sm text-gray-600"
            }
          >
            Hook Form
          </a>
          <a href="/" className="text-sm text-gray-600">
            Start a listing
          </a>
          <a href="/" className="text-sm text-gray-600">
            My Sold!
          </a>
          <a href="/" className="text-sm text-gray-600">
            Log out
          </a>
        </div>
      </header>
    </>
  );
}
