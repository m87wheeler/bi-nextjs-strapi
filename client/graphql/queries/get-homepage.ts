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
            }
            ... on ComponentUiButton {
              type: __typename
              id
              text
              link
              borderAndText
              buttonBackground: background
              stickToTop
            }
            ... on ComponentSectionQuoteBox {
              type: __typename
              id
              quote
              clientName
              quoteBackground: background
            }
          }
        }
      }
    }
  }
`;
