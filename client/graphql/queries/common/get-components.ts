export const getComponents = `
  components: content {
    ... on ComponentSectionHeroSection {
      type: __typename
      id
      title
      subTitle
      backgroundMedia {
        data {
          attributes {
            url
            mime
            caption
          }
        }
      }
    }
    ... on ComponentSectionHeroSection {
      type: __typename
      id
      title
      subTitle
      backgroundMedia {
        data {
          attributes {
            url
            mime
            caption
          }
        }
      }
      overlay
    }
    ... on ComponentUiTitle {
      type: __typename
      id
      text
      element
      variant
      font
      styles {
        ... on ComponentStylesSharedStyles {
          stickToTop
          background
        }
      }
    }
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
                mime
                caption
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
                      mime
                      caption
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
`;
