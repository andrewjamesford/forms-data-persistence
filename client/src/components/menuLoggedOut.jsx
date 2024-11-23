// Menu for logged out users
export default function MenuLoggedOut({ onLogin }) {
  return (
    <ul className="list-none gap-2 md:gap-4 flex flex-col items-center md:flex-row">
      <li>
        <button
          type="button"
          onClick={onLogin}
          className="text-sm text-gray-600 underline"
        >
          Log In
        </button>
      </li>
    </ul>
  );
}
