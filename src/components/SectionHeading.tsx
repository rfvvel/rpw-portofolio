interface SectionHeadingProps { children: string }

export function SectionHeading({ children }: SectionHeadingProps) {
  return <div className="section-heading"><h2>{children}</h2></div>;
}
