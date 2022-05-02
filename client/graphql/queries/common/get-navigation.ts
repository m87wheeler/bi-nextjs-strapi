export const getNavigation = `
  navigation: primaryPages(locale: $locale) {
    data {
      attributes {
        slug
        pageNavigation {
          ... on ComponentPagePageNavigation {
            showInNavigation
            navigationText
          }
        }
      }
    }
  }
`;
