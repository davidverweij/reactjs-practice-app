export const urlValidator = (str: string): boolean => {
  return !str.trim().match(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$/i"
  );
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
