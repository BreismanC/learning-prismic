import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
};

export const Heading = ({
  as: Comp = "h1",
  className,
  size = "lg",
  children,
}: HeadingProps) => {
  return (
    <Comp
      className={clsx(
        " text-slate-700 font-bold leading-tight tracking-tight font-display",
        size === "xl" && "text-5xl md:text-7xl",
        size === "lg" && "text-4xl md:text-5xl",
        size === "md" && "text-3xl md:text-4xl",
        size === "sm" && "text-2xl md:text-3xl",
        size === "xs" && "text-xl md:text-2xl",
        className
      )}
    >
      {children}
    </Comp>
  );
};
