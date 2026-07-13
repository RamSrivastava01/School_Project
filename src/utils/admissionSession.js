export function getAdmissionSessionYear(date = new Date()) {
   const startYear = date.getFullYear();
   const endYear = String(startYear + 1).slice(-2);

   return `${startYear}-${endYear}`;
}
