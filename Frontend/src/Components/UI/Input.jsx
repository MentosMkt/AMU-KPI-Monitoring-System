import React from "react";
import { cn } from "../../lib/utils";


const Input = React.forwardRef((props, ref) => {
  const { className, type, ...rest } = props;

  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-10 w-full   bg-background px-3 py-2  placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export { Input };
