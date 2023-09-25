export function FormGroup(props: React.ComponentPropsWithRef<"div">) {
  return (
    <div {...props} className=" flex flex-col gap-1">
      {props.children}
    </div>
  );
}

export function Input(props: React.ComponentPropsWithRef<"input">) {
  return (
    <input
      {...props}
      type="text"
      className="rounded border border-black px-2 py-1"
    ></input>
  );
}
