import Image from "next/image";
import { FC } from "react";
// import BottomCTAImage from "../../../public/bottom-cta-background.jpg"

const BottomCTA: FC = () => {
  return (
    <section
      data-w-id="4500f34f-ad71-c737-340f-a39b6520a855"
      className="section is-bottom-cta"
    >
      <div className="container-large">
        <div
          data-w-id="4500f34f-ad71-c737-340f-a39b6520a857"
          className="bottom-cta_wrap"
        >
          {/* Heading */}
          <div className="max-width-700">
            <h2 className="heading-style-h1">
              <span
                className="is-word is-1"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                Join 
              </span>{" "}
              <span
                className="is-word is-2"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                the
              </span>{" "}
              <br />
              <span
                className="is-word is-3"
                style={{
                  transform:
                    "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  opacity: 1,
                }}
              >
                Community?
              </span>
            </h2>
          </div>

          {/* Background Image */}
          <div
            className="bottom-cta_box"
            style={{
              willChange: "transform",
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1.64047, 1.64047, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="video_bg">
              <div className="video_bg_overlay">

              <Image
                src="/bottom-cta-background.jpg"
                alt="Join a camp"
              />
              </div>
              {/* <div
                    style={{
                        width: "100%",
                        height: "100%",
                      backgroundImage:
                        "url(/bottom-cta-background.jpg)",
                    }}
                  /> */}
            </div>
          </div>

          {/* Join a Camp Button */}
          <div id="w-node-_4500f34f-ad71-c737-340f-a39b6520a85f-6520a855" className="max-width-full" style={{ zIndex: 2}}>
            <a href="/contact" className="button is-primary w-inline-block">
              <p>Join a camp</p>
              <Image
                src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670563f226883663736a6d20_icon-arrow-light.svg"
                alt="Join a camp"
                width={16}
                height={16}
                className="icon-16"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
