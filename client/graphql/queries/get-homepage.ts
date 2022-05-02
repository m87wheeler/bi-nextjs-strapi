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
              styles {
                ... on ComponentStylesSharedStyles {
                  stickToTop
                  background
                }
              }
            }
            ... on ComponentLayoutFreeText {
              type: __typename
              id
              content
              styles {
                ... on ComponentStylesSharedStyles {
                  stickToTop
                  background
                }
              }
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
                data {
                  id
                  ... on ProjectEntity {
                    attributes {
                      title
                      link: slug
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
              styles {
                ... on ComponentStylesSharedStyles {
                  stickToTop
                  background
                }
              }
            }
            ... on ComponentSectionButtonSection {
              type: __typename
              id
              button {
                ... on ComponentUiButton {
                  id
                  text
                  link
                  borderAndText
                  background
                }
              }
              styles {
                stickToTop
                background
              }
            }
            ... on ComponentSectionQuoteBox {
              type: __typename
              id
              quote
              clientName
              styles {
                ... on ComponentStylesSharedStyles {
                  stickToTop
                  background
                }
              }
            }
          }
        }
      }
    }
  }
`;
