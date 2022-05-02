import { gql } from "@apollo/client";
import { getComponents } from "./common/get-components";
import { getMetaData } from "./common/get-metadata";
import { getNavigation } from "./common/get-navigation";

export const getPrimaryPage = gql`
  query PrimaryPage($slug: String!, $locale: I18NLocaleCode!) {
    primaryPages(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          locale
          localizations {
            data {
              attributes {
                locale
              }
            }
          }
          title
          slug
          ${getMetaData}
          ${getComponents}
        }
      }
    }
    ${getNavigation}
  }
`;
