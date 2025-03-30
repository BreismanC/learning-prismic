import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded, Button, Heading, Paragraph } from "@/app/components";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 place-items-center text-center">
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
        <PrismicRichText field={slice.primary.body} components={components} />
        <Button field={slice.primary.button_link} className="mb-8 md:mb-10" />
        <PrismicNextImage
          field={slice.primary.image}
          className="drop-shadow max-w-4xl w-full "
        />
      </div>
    </Bounded>
  );
};

export default Hero;

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0"
      as="h1"
      size="xl"
    >
      {children}
    </Heading>
  ),
  paragraph: Paragraph,
};
