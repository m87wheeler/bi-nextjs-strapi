import { BaseImageProps } from "../types/cms-types";

export const isExternalUrl = (url: string) => {
  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  return url.match(regex);
};

export function hasOwnProperty<X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> {
  if (!obj) return false;
  return obj.hasOwnProperty(prop);
}

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export function getStrapiMedia(media?: BaseImageProps): string {
  if (!media) return "";
  const url =
    hasOwnProperty(media, "attributes") &&
    hasOwnProperty(media.attributes, "url")
      ? media?.attributes?.url
      : null;
  if (!url) return "";
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}

export const formatPrimaryPage = (data: any) => {
  return data?.primaryPages?.data?.[0]?.attributes ?? {};
};
