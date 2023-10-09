import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

type TextareaProps = Omit<QwikIntrinsicElements["textarea"], "children"> & {
  label?: string;
  error: string;
};

export default component$<TextareaProps>(({ label, error, ...props }) => {
  const { name, required } = props;

  return (
    <>
      {label && (
        <label for={name} class="block font-medium leading-10 text-primary">
          {label} {required && <span>*</span>}
        </label>
      )}
      <textarea
        class={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )}
        {...props}
      />
      {error && <div id={`${name}-error`}>{error}</div>}
    </>
  );
});
