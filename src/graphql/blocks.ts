import { MEDIA_FIELDS } from "./media";

const SETTINGS = `{
    theme
}
`;

export const CONTENT = `
...on Content {
    blockType
    contentFields {
        useLeadingHeader
        leadingHeader
        layout
        columnOne
        columnTwo
        columnThree
        settings ${SETTINGS}
    }
}
`;

export const CALLOUT = `
...on Callout {
    blockType
    calloutFields {
        settings ${SETTINGS}
        enableCalloutHeading
        calloutHeading
        calloutBody   
    }
}
`;

export const MEDIA_BLOCK = `
...on MediaBlock {
    blockType
    mediaBlockFields {
        settings ${SETTINGS}
        position
        media ${MEDIA_FIELDS}
        caption
    }
}
`;

export const FEATURED_POST = `
...on FeaturedPost {
    blockType
    featuredPostFields {
        featuredPost {
          id 
          title  
          image ${MEDIA_FIELDS}
          summary
          slug
          publishedOn
          category {
          name
          }
        }
    }
}
`;

export const CTA = `
...on Cta {
    blockType
    ctaFields {
        links {
            link {
                url
                type 
                label
            }
        }

        ctaContent
    } 
}
`;
