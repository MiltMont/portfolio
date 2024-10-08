import { CONTENT, CALLOUT, MEDIA_BLOCK } from "./blocks";
import { MEDIA_FIELDS } from "./media";

export const POSTS = `
    query Posts($publishedOn: DateTime){
        Posts(where: { publishedOn: { less_than_equal: $publishedOn} }, limit: 300 sort: "-publishedOn") {
            docs {
                id
                title 
                summary
                createdAt
                publishedOn
                slug
                image ${MEDIA_FIELDS}
                category {
                    name
                }
            }
        }
    }
`;

export const POST = `
    query Post($slug: String) {
        Posts(where: {slug: {equals: $slug}}, limit: 1) {
            docs {
                id
                title 
                image ${MEDIA_FIELDS}
                summary
                createdAt
                publishedOn
                category {
                    name
                }
                content {
                    ${CONTENT}
                    ${CALLOUT}
                    ${MEDIA_BLOCK}
                }
            }
        }
    }
`;
