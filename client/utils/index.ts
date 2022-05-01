export const isExternalUrl = (url: string) => {
  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  return url.match(regex);
};

export const cmsAsset = (url?: string): string => {
  if (!url) return "";
  return `${"http://localhost:1337"}${url}`;
};
