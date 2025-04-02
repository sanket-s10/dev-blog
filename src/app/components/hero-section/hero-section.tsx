import Image from "next/image";
import { FC } from "react";
import styles from "./HeroSection.module.css";

const HeroSection: FC = () => {
  return (
    <section className="section is-video">
      <div className="container-large">
        {/* Header Text */}
        <div className="flex-center">
          <div className="max-width-700">
            <h1 className="heading-style-h1">
              <span
                data-w-id="256a64f6-f429-7765-d6fb-826f628ae915"
                style={{
                  opacity: 1,
                  transform: "translate3d(0px, 0em, 0px) scale3d(1, 1, 1)",
                  transformStyle: "preserve-3d",
                }}
                className="is-word is-1"
              >
                Byte / {"{ BREW }"}

              </span>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="container-large">
        <div className="mt-4">
          <h2 className="heading-style-h2 text-center">
            Connect. Share. 
            <div className={styles.flipContainer}>
              
              <span>Learn</span>
              <span>Grow</span>
              <span>Collaborate</span>
              <span>Innovate</span>
              {/** 
               * Build
Learn
Grow
Teach
Collaborate
Innovate
              */}
            </div>
          </h2>
        </div>
      </div>
      {/* Video Section */}
      <div
        data-w-id="cf27677c-e3d0-62bd-4d63-f46756324b46"
        className={styles.videoWall}
      >
        <div className="video_section">
          <div
            className="video_wrap"
            style={{
              willChange: "transform",
              transform: "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              data-w-id="805de4e7-667f-95f8-2868-3a3b4fbdd528"
              className="video_box"
              style={{
                transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
            >
              {/* Learn More Button */}
              <a
                data-w-id="805de4e7-667f-95f8-2868-3a3b4fbdd529"
                href="#intro"
                className="video_btn w-inline-block"
                style={{
                  willChange: "transform",
                  transform: "translate3d(0px, 0px, 0px) scale3d(1.2, 1.2, 1)",
                  transformStyle: "preserve-3d",
                }}
              >
                <p className="heading-style-h3">Learn more</p>
                <div className="video_play">
                  <Image
                    src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/6708ff6b2b6b950e69959c97_icon-arrow-down.svg"
                    alt="Learn more"
                    width={16}
                    height={16}
                    className="icon-16"
                  />
                </div>
              </a>
            </div>
            {/* Video Title */}
            <div
              className="video_title"
              style={{
                willChange: "transform",
                transform: "translate3d(0px, 0%, 0px) scale3d(1.2, 1.2, 1)",
                transformStyle: "preserve-3d",
              }}
            >
              <p className="heading-style-h2 is-title">
                <span className="is-word is-1">FREE</span>{" "}
                <span className="is-word is-2">Developer</span>{" "}
                <span className="is-word is-3">Community.</span>
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
