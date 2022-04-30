export const getPage = `
query Page($slug: String!) {
    pages(filters: { slug: { eq: $slug } } ) {
      data {
        attributes {
          type: __typename
          pageName
          content {
            ... on ComponentLayoutTwoColumn {
              type: __typename
              title
              titleWidth
              titleAlign
              leftColumnContent
              rightColumnContent
              button {
                ... on ComponentUiElementButton {
                  type: __typename
                  text
                  icon
                  alignIconWithText
                  colour
                  border
                }
              }
            }
            ... on ComponentCarouselCardCarousel {
              type: __typename
              content {
                ... on ComponentCarouselCardCarouselItem {
                  type: __typename
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
  `;
