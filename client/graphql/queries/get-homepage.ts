import { gql } from "@apollo/client";
import { getComponents } from "./common/get-components";
import { getMetaData } from "./common/get-metadata";

export const getHomepage = gql`
  query HomePage($locale: I18NLocaleCode!) {
    homepage(locale: $locale) {
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
  }
`;
