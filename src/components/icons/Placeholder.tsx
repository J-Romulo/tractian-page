export default function LogoPlaceholder({
  name,
  width,
  height,
}: {
  name: string;
  width: number;
  height: number;
}) {
  return (
    <div
      className="mx-auto flex items-center justify-center bg-slate-100 rounded text-slate-400 text-xs"
      style={{ width, height }}
    >
      {name}
    </div>
  );
}
