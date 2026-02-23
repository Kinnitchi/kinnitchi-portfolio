import { cn } from "@/lib/utils";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  /** Override className for the wrapper div */
  className?: string;
}

/**
 * Consistent section heading used across all page sections.
 * Renders an `h2` (maintaining a single `h1` in Hero) plus an optional subtitle.
 */
export default function SectionTitle({ children, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn(styles.wrapper, className)}>
      <h2 className={styles.title}>{children}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
