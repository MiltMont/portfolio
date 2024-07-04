import { MainMenu } from "@types";
const globals = [
  {
    _id: "66831cc6841c2cb227d7c4da",
    columns: [
      {
        label: "Social Media",
        navItems: [
          {
            link: {
              type: "reference",
              reference: {
                relationTo: "pages",
                value: "6683153906c09997144bd7ae",
              },
              label: "Spotify",
            },
            id: "66831cbd447ae92175999ab1",
          },
        ],
        id: "66831cbd447ae92175999ab0",
      },
    ],
    globalType: "footer",
    createdAt: "2024-07-01T21:16:54.100Z",
    updatedAt: "2024-07-01T21:16:54.100Z",
    __v: 0,
  },
  {
    _id: "66872684df69c5926dc1e3ab",
    tabs: [
      {
        label: "Writing",
        enableDropdown: true,
        link: { type: "reference" },
        description: "I write about mathematics in here!",
        descriptionLinks: [],
        navItems: [
          {
            style: "default",
            defaultLink: {
              link: {
                type: "custom",
                reference: {
                  relationTo: "pages",
                  value: "6683153906c09997144bd7ae",
                },
                url: "/blog",
                label: "Blog",
              },
            },
            featuredLink: { links: [] },
            listLinks: { links: [] },
            id: "6687263a0e71180d66ed2e1c",
          },
          {
            style: "default",
            defaultLink: {
              link: { type: "custom", url: "/notes", label: "Lecture notes" },
              description: "Some good old hand written lecture notes.",
            },
            featuredLink: { links: [] },
            listLinks: { links: [] },
            id: "6687265a0e71180d66ed2e1d",
          },
        ],
        id: "668726200e71180d66ed2e1a",
      },
      {
        label: "About Me",
        enableDirectLink: true,
        link: { type: "custom", url: "/about" },
        descriptionLinks: [],
        navItems: [],
        id: "668726730e71180d66ed2e1e",
      },
    ],
    globalType: "main-menu",
    createdAt: "2024-07-04T22:47:32.523Z",
    updatedAt: "2024-07-04T22:47:32.523Z",
    __v: 0,
  },
];

export const mainMenu: MainMenu = {
  id: "66872684df69c5926dc1e3ab",
  tabs: [
    {
      label: "Writing",
      enableDropdown: true,
      link: { type: "reference" },
      description: "I write about mathematics in here!",
      descriptionLinks: [],
      navItems: [
        {
          style: "default",
          defaultLink: {
            link: {
              type: "custom",
              reference: {
                relationTo: "pages",
                value: "6683153906c09997144bd7ae",
              },
              url: "/blog",
              label: "Blog",
            },
          },
          featuredLink: { links: [] },
          listLinks: { links: [] },
          id: "6687263a0e71180d66ed2e1c",
        },
        {
          style: "default",
          defaultLink: {
            link: { type: "custom", url: "/notes", label: "Lecture notes" },
            description: "Some good old hand written lecture notes.",
          },
          featuredLink: { links: [] },
          listLinks: { links: [] },
          id: "6687265a0e71180d66ed2e1d",
        },
      ],
      id: "668726200e71180d66ed2e1a",
    },
    {
      label: "About Me",
      enableDirectLink: true,
      link: { type: "custom", url: "/about" },
      descriptionLinks: [],
      navItems: [],
      id: "668726730e71180d66ed2e1e",
    },
  ],
  createdAt: "2024-07-04T22:47:32.523Z",
  updatedAt: "2024-07-04T22:47:32.523Z",
};
