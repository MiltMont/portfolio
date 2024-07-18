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
    }
}
`;
