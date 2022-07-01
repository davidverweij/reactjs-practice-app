export const urlValidator = (str: string): boolean => {
  const match = str
    .trim()
    .match(
      "^((https?|ftp|smtp)://)?(www.)?[a-z0-9]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$"
    );
  if (!match) return false;
  return match.length > 0;
};

export const movieScoreValidator = (str: string): boolean => {
  if (!str.trim().match("^[0-9]+(\\.\\d)?$")) return false;

  const score = parseFloat(str);
  if (score <= 0.0 || score > 10.0) return false;
  return true;
};

export const movieRuntimeValidator = (str: string): boolean => {
  if (!str.trim().match("^\\d+$")) return false;

  const runtime = parseInt(str, 10);
  if (runtime <= 0) return false;

  return true;
};
