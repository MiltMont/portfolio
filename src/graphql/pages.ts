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
