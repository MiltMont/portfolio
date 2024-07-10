/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page;
    posts: Post;
    categories: Category;
    media: Media;
    users: User;
    "payload-preferences": PayloadPreference;
    "payload-migrations": PayloadMigration;
  };
  globals: {
    "main-menu": MainMenu;
    footer: Footer;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  fullTitle?: string | null;
  hero: {
    type: "default" | "home" | "centered";
    theme?: ("light" | "dark") | null;
    richText?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ("ltr" | "rtl") | null;
        format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    description?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ("ltr" | "rtl") | null;
        format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    media?: string | Media | null;
    enableBreadcrumbsBar?: boolean | null;
    breadcrumbsBarLinks?:
      | {
          link: {
            type?: ("reference" | "custom") | null;
            newTab?: boolean | null;
            reference?:
              | ({
                  relationTo: "posts";
                  value: string | Post;
                } | null)
              | ({
                  relationTo: "pages";
                  value: string | Page;
                } | null);
            url?: string | null;
            label: string;
          };
          id?: string | null;
        }[]
      | null;
  };
  layout: (
    | {
        mediaBlockFields: {
          settings?: {
            theme?: ("light" | "dark") | null;
          };
          position?: ("default" | "wide") | null;
          media: string | Media;
          caption?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: "mediaBlock";
      }
    | {
        contentFields?: {
          settings?: {
            theme?: ("light" | "dark") | null;
          };
          useLeadingHeader?: boolean | null;
          leadingHeader?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          layout?:
            | (
                | "centered"
                | "oneColumn"
                | "twoColumns"
                | "twoThirdsOneThird"
                | "halfAndHalf"
                | "threeColumns"
              )
            | null;
          columnOne?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          columnTwo?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          columnThree?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: "content";
      }
    | {
        ctaFields?: {
          settings?: {
            theme?: ("light" | "dark") | null;
          };
          ctaContent?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          links?:
            | {
                link: {
                  type?: ("reference" | "custom") | null;
                  newTab?: boolean | null;
                  reference?:
                    | ({
                        relationTo: "posts";
                        value: string | Post;
                      } | null)
                    | ({
                        relationTo: "pages";
                        value: string | Page;
                      } | null);
                  url?: string | null;
                  label: string;
                };
                id?: string | null;
              }[]
            | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: "cta";
      }
    | {
        featuredPostFields: {
          settings?: {
            theme?: ("light" | "dark") | null;
          };
          featuredPost: string | Post;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: "featuredPost";
      }
  )[];
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ("draft" | "published") | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  darkModeFallback?: string | Media | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  title: string;
  image: string | Media;
  summary: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ("ltr" | "rtl") | null;
      format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  content: (
    | {
        mediaBlockFields: {
          settings?: {
            theme?: ("light" | "dark") | null;
          };
          position?: ("default" | "wide") | null;
          media: string | Media;
          caption?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: "mediaBlock";
      }
    | {
        contentFields?: {
          settings?: {
            theme?: ("light" | "dark") | null;
          };
          useLeadingHeader?: boolean | null;
          leadingHeader?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          layout?:
            | (
                | "centered"
                | "oneColumn"
                | "twoColumns"
                | "twoThirdsOneThird"
                | "halfAndHalf"
                | "threeColumns"
              )
            | null;
          columnOne?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          columnTwo?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          columnThree?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: "content";
      }
    | {
        ctaFields?: {
          settings?: {
            theme?: ("light" | "dark") | null;
          };
          ctaContent?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          links?:
            | {
                link: {
                  type?: ("reference" | "custom") | null;
                  newTab?: boolean | null;
                  reference?:
                    | ({
                        relationTo: "posts";
                        value: string | Post;
                      } | null)
                    | ({
                        relationTo: "pages";
                        value: string | Page;
                      } | null);
                  url?: string | null;
                  label: string;
                };
                id?: string | null;
              }[]
            | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: "cta";
      }
    | {
        featuredPostFields: {
          settings?: {
            theme?: ("light" | "dark") | null;
          };
          featuredPost: string | Post;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: "featuredPost";
      }
    | {
        calloutFields?: {
          settings?: {
            theme?: ("light" | "dark") | null;
          };
          enableCalloutHeading?: boolean | null;
          calloutHeading?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          calloutBody?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: "callout";
      }
    | {
        equationFields?: {
          settings?: {
            theme?: ("light" | "dark") | null;
          };
          richText?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ("ltr" | "rtl") | null;
              format:
                | "left"
                | "start"
                | "center"
                | "right"
                | "end"
                | "justify"
                | "";
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: "equation";
      }
  )[];
  relatedPosts?: (string | Post)[] | null;
  slug?: string | null;
  publishedOn: string;
  updatedAt: string;
  createdAt: string;
  _status?: ("draft" | "published") | null;
  category?: Category;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  twitter?: string | null;
  photo?: string | Media | null;
  roles: ("admin" | "public")[];
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: "users";
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "main-menu".
 */
export interface MainMenu {
  id: string;
  tabs?:
    | {
        label: string;
        enableDirectLink?: boolean | null;
        enableDropdown?: boolean | null;
        link?: {
          type?: ("reference" | "custom") | null;
          newTab?: boolean | null;
          reference?:
            | ({
                relationTo: "posts";
                value: string | Post;
              } | null)
            | ({
                relationTo: "pages";
                value: string | Page;
              } | null);
          url?: string | null;
        };
        description?: string | null;
        descriptionLinks?:
          | {
              link: {
                type?: ("reference" | "custom") | null;
                newTab?: boolean | null;
                reference?:
                  | ({
                      relationTo: "posts";
                      value: string | Post;
                    } | null)
                  | ({
                      relationTo: "pages";
                      value: string | Page;
                    } | null);
                url?: string | null;
                label: string;
              };
              id?: string | null;
            }[]
          | null;
        navItems?:
          | {
              style?: ("default" | "featured" | "list") | null;
              defaultLink?: {
                link: {
                  type?: ("reference" | "custom") | null;
                  newTab?: boolean | null;
                  reference?:
                    | ({
                        relationTo: "posts";
                        value: string | Post;
                      } | null)
                    | ({
                        relationTo: "pages";
                        value: string | Page;
                      } | null);
                  url?: string | null;
                  label: string;
                };
                description?: string | null;
              };
              featuredLink?: {
                tag?: string | null;
                label?: {
                  root: {
                    type: string;
                    children: {
                      type: string;
                      version: number;
                      [k: string]: unknown;
                    }[];
                    direction: ("ltr" | "rtl") | null;
                    format:
                      | "left"
                      | "start"
                      | "center"
                      | "right"
                      | "end"
                      | "justify"
                      | "";
                    indent: number;
                    version: number;
                  };
                  [k: string]: unknown;
                } | null;
                links?:
                  | {
                      link: {
                        type?: ("reference" | "custom") | null;
                        newTab?: boolean | null;
                        reference?:
                          | ({
                              relationTo: "posts";
                              value: string | Post;
                            } | null)
                          | ({
                              relationTo: "pages";
                              value: string | Page;
                            } | null);
                        url?: string | null;
                        label: string;
                      };
                      id?: string | null;
                    }[]
                  | null;
              };
              listLinks?: {
                tag?: string | null;
                links?:
                  | {
                      link: {
                        type?: ("reference" | "custom") | null;
                        newTab?: boolean | null;
                        reference?:
                          | ({
                              relationTo: "posts";
                              value: string | Post;
                            } | null)
                          | ({
                              relationTo: "pages";
                              value: string | Page;
                            } | null);
                        url?: string | null;
                        label: string;
                      };
                      id?: string | null;
                    }[]
                  | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  columns?:
    | {
        label: string;
        navItems?:
          | {
              link: {
                type?: ("reference" | "custom") | null;
                newTab?: boolean | null;
                reference?:
                  | ({
                      relationTo: "posts";
                      value: string | Post;
                    } | null)
                  | ({
                      relationTo: "pages";
                      value: string | Page;
                    } | null);
                url?: string | null;
                label: string;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
