export const POSTS = `
    query {
        Posts {
            docs {
                id
                title 
                summary
                createdAt
                publishedOn
                slug
                category {
                id 
                title
                }
            }
        }
    }
`;
