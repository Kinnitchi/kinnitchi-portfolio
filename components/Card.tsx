import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export default function Card({
  children,
  hover = true,
  className = "",
}: CardProps) {
  return (
    <div className={`${styles.card} ${hover ? styles.hover : ""} ${className}`}>
      {children}
    </div>
  );
}
