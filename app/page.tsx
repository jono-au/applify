export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-applify-gradient">
      <div className="bg-white p-10 rounded-blob shadow-xl">
        <h1 className="text-4xl font-bold text-applify-orange">
          Tailwind is working 🚀
        </h1>
        <p className="mt-4 text-applify-teal1">Applify design system loaded</p>
        <button className="mt-6 px-6 py-3 bg-applify-amber text-white rounded-full">
          Test Button
        </button>
      </div>
    </main>
  );
}
