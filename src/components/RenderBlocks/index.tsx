"use client";
import React from "react";
import { ContentBlock } from "@blocks/Content";
import { CalloutBlock } from "@blocks/Callout";
import { Page } from "@types";
import MediaBlock from "@blocks/Media";
import { FeaturedPost } from "@components/FeaturedPost";

const blockComponents = {
  content: ContentBlock,
  callout: CalloutBlock,
  mediaBlock: MediaBlock,
  featuredPost: FeaturedPost,
};

export type BlocksProp = Page["layout"][0];

type Props = {
  blocks: BlocksProp[];
  customId?: string | null;
};

export const RenderBlocks: React.FC<Props> = (props) => {
  const { blocks, customId } = props;
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <div id={customId ?? undefined}>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return <Block key={index} id={blockName} {...block} />;
            }
          }
        })}
      </div>
    );
  }
};
