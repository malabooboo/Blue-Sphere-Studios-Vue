/** Year I started building websites professionally. */
export const CAREER_START_YEAR = 1998;

/** Year I joined Alphabet (Google). */
export const ALPHABET_START_YEAR = 2013;

export function yearsSince(year: number): number {
  return new Date().getFullYear() - year;
}
