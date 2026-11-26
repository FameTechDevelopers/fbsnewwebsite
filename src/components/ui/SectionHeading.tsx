import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, text, center }: Props) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-4xl font-medium leading-[1.1] md:text-6xl">{title}</h2>
      {text && <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">{text}</p>}
    </Reveal>
  );
}
