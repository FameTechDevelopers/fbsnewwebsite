// Year is computed at build time and cached (required by Next.js Cache Components).
export async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
