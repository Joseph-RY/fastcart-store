import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@shared/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FAFAFA]", {
  variants: {
    variant: {
      default: "bg-[#DB4444] text-[#FAFAFA] shadow-sm hover:bg-[#c63c3c]",
      destructive: "bg-transparent text-[red] border border-[red] shadow-sm hover:bg-[red]/10 focus-visible:ring-[red]",
      outline: "border border-[#DB4444] text-[#DB4444] bg-transparent hover:bg-[#DB4444]/10",
      secondary: "bg-[#FAFAFA] text-[#DB4444] hover:bg-[#FAFAFA]/80",
      ghost: "text-[#DB4444] hover:bg-[#DB4444]/10",
      link: "text-[#DB4444]",
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
