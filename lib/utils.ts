/**
 * Combines class names, ignoring falsy values.
 * Lightweight alternative to `clsx` / `classnames`.
 *
 * @example
 * cn("foo", condition && "bar", undefined) // "foo bar"
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
