interface CardProps {
  title?: string;
  subtitle?: string;
}

export const Card = ({ title, subtitle }: CardProps) => {
  return (
    <article className="flex flex-col justify-center items-center bg-gradient-to-r from-[var(--orange)]/25 to-[var(--red)]/25 rounded-full p-[32px] w-full bg-opacity">
      <h3 className="text-white text-[64px]">{title}</h3>
      <span className="text-white text-[24px]">{subtitle}</span>
    </article>
  );
};
