type Props = {
  children: string;
  className?: string;
};

export function SectionLabel({ children, className = "" }: Props) {
  return <p className={`label-caps ${className}`.trim()}>{children}</p>;
}
