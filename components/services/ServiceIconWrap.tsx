type ServiceIconWrapProps = {
  children: React.ReactNode;
};

export default function ServiceIconWrap({ children }: ServiceIconWrapProps) {
  return (
    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="text-[#0f0f10]">{children}</div>
    </div>
  );
}
