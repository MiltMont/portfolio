import { CONTENT, MEDIA_BLOCK } from "./blocks";
import { MEDIA_FIELDS } from "./media";

export const PAGES = `
    query Pages {
        Pages {
            docs {
                id
                title
                slug
                createdAt
                updatedAt
            }
        }
    }
`;

export const PAGE = `
    query Page($slug: String) {
        Pages(where: {slug: {equals: $slug}}, limit: 1) {
            docs {
                id 
                title 
                slug 
                createdAt
                updatedAt
                hero {
                    type
                    richText
                    description
                    media ${MEDIA_FIELDS}
                }
                layout {
                    ${CONTENT}
                    ${MEDIA_BLOCK}
                }    
            }

        }
    }
`;
