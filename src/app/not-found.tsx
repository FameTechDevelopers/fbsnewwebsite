import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center pt-32 text-center">
      <div className="container-x">
        <p className="font-display text-[9rem] leading-none text-gradient md:text-[14rem]">404</p>
        <h1 className="mt-4 text-4xl">This page has moved on</h1>
        <p className="mt-4 text-mist">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Button href="/" className="mt-10">Back to Home</Button>
      </div>
    </section>
  );
}
