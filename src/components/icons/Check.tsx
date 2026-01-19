export function CheckIcon({ active }: { active: boolean }) {
  return (
    <figure
      className={`flex h-6 w-6 items-center justify-center transition-all duration-300 ease-in-out ${
        active ? "bg-blue-600" : "bg-slate-400"
      }`}
    >
      <svg
        fill="none"
        height="14"
        viewBox="0 0 25 25"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.02344 11.5L10.0234 19.5M2.02344 11.5L10.0234 19.5"
          stroke="#fff"
          strokeWidth="1.8"
        />
        <path d="M9.02344 19.5L23.0234 5.5" stroke="#fff" strokeWidth="1.8" />
      </svg>
    </figure>
  );
}
