import { component$ } from "@builder.io/qwik";
import { Separator } from "~/registry/new-york/ui/separator";

export default component$(() => {
  return (
    <div>
      <div class="space-y-1">
        <h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
        <p class="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator />
      <div class="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator />
        <div>Docs</div>
        <Separator />
        <div>Source</div>
      </div>
    </div>
  );
});
