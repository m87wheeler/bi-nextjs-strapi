import { gql } from "@apollo/client";

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
          metaData {
            metaTitle
            metaDescription
            metaKeywords
          }
          components: content {
            ... on ComponentLayoutTwoColumn {
              type: __typename
              id
              title
              titleAlign
              titleColumn
              column {
                ... on ComponentLayoutContentColumn {
                  type: __typename
                  id
                  columnStart
                  columnSpan
                  content
                }
              }
            }
            ... on ComponentLayoutFreeText {
              type: __typename
              id
              content
            }
            ... on ComponentCardCarouselCardCarousel {
              type: __typename
              id
              itemsPerPage
              items {
                ... on ComponentCardCarouselCardCarouselItem {
                  type: __typename
                  id
                  title
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  link
                }
              }
              projects {
                ... on ProjectRelationResponseCollection {
                  data {
                    attributes {
                      title
                      slug
                      carouselCard {
                        title
                        image {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                        link
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
