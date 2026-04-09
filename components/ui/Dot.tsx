type DotProps = {
  variant?: "orange" | "amber" | "teal" | "maroon";
  className?: string;
};

export default function Dot({ variant = "orange", className = "" }: DotProps) {
  const styles = {
    orange:
      "bg-gradient-to-r from-[#ff5a00] to-[#ff7a1a] bg-clip-text text-transparent pr-[5px]",
    amber:
      "bg-gradient-to-r from-[#ffb846] to-[#ffd27a] bg-clip-text text-transparent pr-[5px]",
    teal: "bg-gradient-to-r from-[#0ca2a6] to-[#008486] bg-clip-text text-transparent pr-[5px]",
    maroon:
      "bg-gradient-to-r from-[#a52531] to-[#981a26] bg-clip-text text-transparent pr-[5px]",
  };

  return <span className={`${styles[variant]} ${className}`}>.</span>;
}
