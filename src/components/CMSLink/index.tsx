import React from "react";
import Link from "next/link";

import { Page, Post } from "@types";

type PageReference = {
  value: string | Page;
  relationTo: "pages";
};

type PostReference = {
  value: string | Post;
  relationTo: "posts";
};

export type LinkType = "reference" | "custom" | null;
export type Reference = PageReference | PostReference | null;

export type CMSLinkType = {
  type?: LinkType | null;
  newTab?: boolean | null; // If the link opens in a new Tab
  reference?: Reference | null;
  url?: string | null;
  label?: string | null;
  children?: React.ReactNode;
  fullWidth?: boolean;
  mobileFullWidth?: boolean;
  className?: string;
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

type GenerateSlugType = {
  type?: LinkType;
  url?: string | null;
  reference?: Reference | null;
};

const generateHref = (args: GenerateSlugType): string => {
  const { reference, url, type } = args;

  if ((type === "custom" || type === undefined) && url) {
    return url;
  }

  if (
    type === "reference" &&
    reference?.value &&
    typeof reference.value !== "string"
  ) {
    if (reference.relationTo === "posts") {
      return `/blog/${reference?.value.slug}`;
    }

    return `/${reference.relationTo}/${reference.value.slug}`;
  }
  return "";
};

export const CMSLink: React.FC<CMSLinkType> = ({
  type,
  url,
  newTab,
  reference,
  label,
  children,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  fullWidth = false,
  mobileFullWidth = false,
}) => {
  let href = generateHref({ type, url, reference });

  if (!href) {
    return (
      <span
        className={className}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {label}
        {children}
      </span>
    );
  }

  const newTabProps = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (href.indexOf("/") === 0) {
    return (
      <Link
        href={href}
        {...newTabProps}
        className={className}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        prefetch={false}
      >
        {label && label}
        {children && children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      {...newTabProps}
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      prefetch={false}
    >
      {label && label}
      {children && children}
    </Link>
  );
};
