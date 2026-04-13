interface PrivacySectionProps {
  title: string;
  children: React.ReactNode;
}

export default function PrivacySection({ title, children }: PrivacySectionProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-lg font-semibold tracking-tight text-zinc-950">
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-zinc-700">
        {children}
      </div>
    </section>
  );
}
