export function getRemainingDays(endDate: string): number {
  const [year, month, day] = endDate.split('-').map(Number);
  const today = new Date();
  const currentDate = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const expirationDate = Date.UTC(year, month - 1, day);
  return Math.round((expirationDate - currentDate) / (1000 * 60 * 60 * 24));
}
