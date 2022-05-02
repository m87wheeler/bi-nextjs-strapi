import { gql } from "@apollo/client";

export const getPage = gql`
  query Page($slug: String!, $locale: I18NLocaleCode!) {
    pages(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          pageName
          slug
          content {
            ... on ComponentCarouselCardCarousel {
              type: __typename
              id
              itemsPerPage
              card {
                ... on ComponentCarouselEntry {
                  type: __typename
                  project {
                    data {
                      attributes {
                        title
                        slug
                        cardCarousel {
                          type: __typename
                          title
                          image {
                            data {
                              attributes {
                                url
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
        }
      }
    }
  }
`;

// query Page($slug: String!) {
//   pages(filters: { slug: { eq: $slug } }) {
//     data {
//       attributes {
//         type: __typename
//         pageName
//         content {
//           ... on ComponentLayoutTwoColumn {
//             type: __typename
//             title
//             titleWidth
//             titleAlign
//             columns {
//               ... on ComponentLayoutContentColumn {
//                 columnStart
//                 columnSpan
//                 content
//               }
//             }
//             button {
//               ... on ComponentUiElementButton {
//                 type: __typename
//                 text
//                 icon
//                 alignIconWithText
//                 colour
//                 border
//               }
//             }
//           }
//           ... on ComponentCarouselCardCarousel {
//             type: __typename
//             itemsPerPage
//             cards: content {
//               ... on ComponentCarouselCardCarouselItem {
//                 type: __typename
//                 id
//                 title
//                 image {
//                   data {
//                     attributes {
//                       url
//                     }
//                   }
//                 }
//                 link
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
