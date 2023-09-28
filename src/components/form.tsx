export function FormGroup(props: React.ComponentPropsWithRef<"div">) {
  return <div {...props}>{props.children}</div>;
}

export function Input(props: React.ComponentPropsWithRef<"input">) {
  return (
    <input
      {...props}
      type="text"
      className="rounded border border-black px-2 py-1 text-black"
    ></input>
  );
}
