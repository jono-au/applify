export default function MapSection() {
  return (
    <section className="pb-20 md:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
        <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <iframe
            src="https://www.google.com/maps?q=8+Clunies+Ross+Crt,+Eight+Mile+Plains+QLD+4113&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
