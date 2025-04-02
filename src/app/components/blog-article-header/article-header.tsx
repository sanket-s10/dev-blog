import Image from 'next/image';
import React from 'react';
import "./article-header.css"

const ArticleHeader: React.FC = () => {
  return (
    <div className="blog-headline-element-block">
      <div
        data-w-id="07f43c84-3245-99fe-6fac-7a700967ccdc"
        style={{
          opacity: 1,
          transform:
            'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          transformStyle: 'preserve-3d',
        }}
        className="blog-type"
      >
        <div className="text-sm text-weight-medium text-color-black-900">Trading</div>
      </div>

      <h2
        data-w-id="fae5392f-aa05-b964-994e-c4dcda101482"
        style={{
          opacity: 1,
          transform:
            'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          transformStyle: 'preserve-3d',
        }}
        className="heading-style-h2"
      >
        Top 10 Rendering Software for Stunning Visuals
      </h2>

      <p
        data-w-id="fae5392f-aa05-b964-994e-c4dcda101484"
        style={{
          opacity: 1,
          transform:
            'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          transformStyle: 'preserve-3d',
        }}
        className="blog-intro-text text-base text-weight-medium text-color-black-600"
      >
        More the legislators, texts to frequently for deeply have tin, structure of have bit
        prosecution handwriting and train one that especially even happened are concise
      </p>

      <div
        data-w-id="fae5392f-aa05-b964-994e-c4dcda101486"
        style={{
          opacity: 1,
          transform:
            'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          transformStyle: 'preserve-3d',
        }}
        className="blog-publish-info-content-wrapper"
      >
        <div className="author-info-content-wrapper">
          <div className="author-image-block">
            <Image
              src="/circle-user-solid.svg"
              alt="Author Image"
              width={48}
              height={48}
              className="author-image"
            />
          </div>
          <div className="author-info-text-wrapper">
            <div className="author-name-text text-lg text-style-no_wrap text-weight-semibold text-color-black-900">
              Brooklyn Simmons
            </div>
            <div className="author-designation-text text-sm text-color-black-800">
              Marketing Coordinator
            </div>
          </div>
        </div>

        <div className="blog-publish-info-block">
          <div className="blog-publish-date-block">
            <Image
              src="https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67be00295f7ba7762eb137d9_calendar-minus-01.svg"
              alt="calender-image"
              width={16}
              height={16}
              className="calender-image"
            />
            <div className="blog-publish-date-text text-sm text-style-no_wrap text-weight-medium text-color-black-800">
              February 25, 2025
            </div>
          </div>

          <div className="blog-read-time-block">
            <Image
              src="https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67be00295f7ba7762eb137da_clock.svg"
              alt="clock-image"
              width={16}
              height={16}
              className="clock-image"
            />
            <div className="blog-read-time-text text-sm text-weight-medium text-color-black-800">
              10 min read
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
