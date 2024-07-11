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
