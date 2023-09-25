export function LogButton(props: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className="rounded border-2 border-black px-2 py-1 transition hover:bg-black hover:text-white"
    >
      {props.children}
    </button>
  );
}
