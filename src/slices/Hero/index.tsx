import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heaading from "@/components/Heading";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heaading
      as="h1"
      size="xl"
      className="mb-4 md:mb-8 mt-12 first:mt-0 last:mb-0"
    >
      {children}
    </Heaading>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl text-slate-600 mb-4 md:mb-8 max-w-md font-normal leading-10 font-body">
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    // First Section:
    // can also use section instead of bounded
    <>
      {slice.variation == "default" && (
        <Bounded
          className="px-4  py-10 md:py-14 md:px-6 lg:py-16"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          {/* <div className="mx-auto w-full max-w-6xl"> First way : To add manually, Second way to add Bounded*/}
          <div className="grid grid-cols-1 place-items-center text-center">
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />

            <PrismicRichText
              field={slice.primary.body}
              components={components}
            />

            {/* Classic way to add Button:
         <PrismicNextLink
          field={slice.primary.button_link}
          className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base mb-8 md:mb-10 tracking-wider"
        >
          <>{slice.primary.button_text}</>
        </PrismicNextLink> */}

            {/* Second way of Importing button */}
            <Button
              field={slice.primary.button_link}
              className=" mb-8 md:mb-10"
            >
              <>{slice.primary.button_text}</>
            </Button>

            <PrismicNextImage
              field={slice.primary.image}
              className="drop-shadow-xl max-w-4xl w-full"
            />
          </div>
          {/* </div> */}
        </Bounded>
      )}
      {/* End of Default Variation */}

      {/* Second Section called Horizantal: */}

      {slice.variation == "horizantal" && (
        <Bounded
          className="px-4  py-10 md:py-14 md:px-6 lg:py-16"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
            <div className="grid grid-rows-[1f,auto,auto] gap-8 h-fit">
              <PrismicRichText
                field={slice.primary.heading}
                components={components}
              />

              <PrismicRichText
                field={slice.primary.body}
                components={components}
              />

              <Button
                field={slice.primary.button_link}
                className=" mb-8 md:mb-10"
              >
                <>{slice.primary.button_text}</>
              </Button>
            </div>
            <PrismicNextImage
              field={slice.primary.image}
              className="drop-shadow-xl max-w-4xl w-full"
            />
          </div>
        </Bounded>
      )}
    </>
  );
};

export default Hero;
