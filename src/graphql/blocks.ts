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
