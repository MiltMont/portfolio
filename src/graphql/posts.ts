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
                    title
                }
            }
        }
    }
`;
