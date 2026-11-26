// Shown instantly while a service page streams in.
export default function Loading() {
  return (
    <section className="container-x animate-pulse pt-40 pb-28 md:pt-48">
      <div className="h-3 w-40 rounded bg-line" />
      <div className="mt-8 h-16 w-3/4 max-w-2xl rounded bg-ink-3" />
      <div className="mt-8 h-4 w-full max-w-xl rounded bg-ink-3" />
      <div className="mt-3 h-4 w-2/3 max-w-lg rounded bg-ink-3" />
    </section>
  );
}
