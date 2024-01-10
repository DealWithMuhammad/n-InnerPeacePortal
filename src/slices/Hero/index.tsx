import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    // can also use section instead of bounded
    <Bounded
      className="px-4  py-10 md:py-14 md:px-6 lg:py-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <div className="mx-auto w-full max-w-6xl"> First way : To add manually, Second way to add Bounded*/}
      <div className="grid grid-cols-1 place-items-center text-center">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-5xl  md:text-7xl font-bold leading-tight tracking-tighter font-display text-slate-700">
                {children}
              </h1>
            ),
          }}
        />

        <PrismicRichText
          field={slice.primary.body}
          components={{
            paragraph: ({ children }) => (
              <p className="text-2xl text-center text-slate-600 mb-4 md:mb-8 max-w-md font-normal leading-10 font-body">
                {children}
              </p>
            ),
          }}
        />

        {/* Classic way to add Button:
         <PrismicNextLink
          field={slice.primary.button_link}
          className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base mb-8 md:mb-10 tracking-wider"
        >
          <>{slice.primary.button_text}</>
        </PrismicNextLink> */}

        {/* Second way of Importing button */}
        <Button field={slice.primary.button_link} className=" mb-8 md:mb-10">
          <>{slice.primary.button_text}</>
        </Button>

        <PrismicNextImage
          field={slice.primary.image}
          className="drop-shadow-xl max-w-4xl w-full"
        />
      </div>
      {/* </div> */}
    </Bounded>
  );
};

export default Hero;
