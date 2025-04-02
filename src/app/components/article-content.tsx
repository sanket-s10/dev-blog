import React from 'react';
import Image from 'next/image';
import "./article-content.css"

const ArticleContent: React.FC = () => {
    return (
        <div className="pt-6">
            <div className="global-padding">
                <div className="blog-main-content-block">
                    <div className="blog-main-content-wrapper">

                        {/* Richtext Block 01 */}
                        <div
                            data-w-id="9b8b272b-b1ac-e7ea-0b1e-f37cc525b205"
                            style={{
                                opacity: 1,
                                transform:
                                    'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                transformStyle: 'preserve-3d',
                            }}
                            className="blog-richtext-block-01"
                        >
                            <div className="blog-rich-text w-richtext">
                                <h3>Essential Marketing Knowledge Awaits</h3>
                                <p>
                                    Stay updated with the latest industry trends, learn from real-world case studies, and discover
                                    innovative approaches to grow your brand and reach your business goals. Our team of experts is
                                    committed to empowering you with the tools and resources you need to thrive in today&apos;s competitive
                                    landscape.
                                </p>
                            </div>
                        </div>

                        {/* Image Block */}
                        <div className="blog-main-image-block" data-w-id="9b8b272b-b1ac-e7ea-0b1e-f37cc525b238">
                            <Image
                                src="/dummy-background.jpg"
                                alt="Blog Image"
                                width={940}
                                height={520}
                                className="blog-main-image"
                            />
                        </div>

                        {/* Richtext Block 02 */}
                        <div className="blog-richtext-block-02" data-w-id="9b8b272b-b1ac-e7ea-0b1e-f37cc525b23a">
                            <div className="blog-rich-text w-richtext">
                                <h3>The Fixed Enormity, This Thousands Turner</h3>
                                <p>
                                    The classes and uneasiness, his ticking service, what something it bear extended had sooner sort
                                    we&apos;re of one possible to found switching the him, over coming fully hard such to least...
                                </p>
                            </div>
                        </div>

                        {/* Quote Block */}
                        <div className="blog-quate-block background-color-black-50" data-w-id="9b8b272b-b1ac-e7ea-0b1e-f37cc525b26d">
                            <div className="blog-qoute-text text-lg text-weight-medium text-color-black-900">
                                &ldquo;Options it deeply, the is for and management-science days, such to a expecting was hungrier...&rdquo;
                            </div>
                        </div>

                        {/* Richtext Block 03 */}
                        <div className="blog-richtext-block-03" data-w-id="9b8b272b-b1ac-e7ea-0b1e-f37cc525b270">
                            <div className="blog-rich-text w-richtext">
                                <p>Insights and Strategies</p>
                                <ul>
                                    <li>Intention or real they&apos;d over their the that all of he there objects switching.</li>
                                    <li>Sign seemed business were for world mad in roasted then.</li>
                                    <li>Work opposite don&apos;t the odd expenses has high relays so and a honour.</li>
                                    <li>Finds tried title scale necessary orthographic what though.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Image Block 2 */}
                        <div className="blog-main-image-block" data-w-id="9b8b272b-b1ac-e7ea-0b1e-f37cc525b2a3">
                            <Image
                                 src="/dummy-background.jpg"
                                alt="Blog Image 2"
                                width={940}
                                height={520}
                                className="blog-main-image"
                            />
                        </div>

                        {/* Richtext Block 04 */}
                        <div className="blog-richtext-block-04" data-w-id="9b8b272b-b1ac-e7ea-0b1e-f37cc525b2a5">
                            <div className="blog-rich-text w-richtext">
                                <h3>As have to Achieves Always People</h3>
                                <p>
                                    Fresh proper didn&apos;t how the of such I that a ill for to yet between them. Last his process you
                                    so dissolute in was advised...
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Share Block */}
                    <div className="blog-share-block">
                        <div className="blog-share-text text-lg text-weight-semibold text-color-black-900">Share:</div>
                        <div className="blog-share-icon-wrapper">
                            {[
                                {
                                    href: 'http://www.facebook.com',
                                    src: 'https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67be011c728f01a64dcbd0c7_fB%20icon.svg',
                                    alt: 'Facebook',
                                },
                                {
                                    href: 'http://www.x.com',
                                    src: 'https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67be011c728f01a64dcbd0c6_twitter%20icon.svg',
                                    alt: 'X / Twitter',
                                },
                                {
                                    href: '#',
                                    src: 'https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67be011c728f01a64dcbd0c8_linkedin%20icon.svg',
                                    alt: 'LinkedIn',
                                },
                                {
                                    href: 'https://www.pinterest.com/',
                                    src: 'https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67be011c728f01a64dcbd0c9_pinterest%20icon.svg',
                                    alt: 'Pinterest',
                                },
                                {
                                    href: 'https://mail.google.com/mail/u/0/#inbox?compose=new',
                                    src: 'https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67be011c728f01a64dcbd0c5_mail%20icon.svg',
                                    alt: 'Email',
                                },
                                {
                                    href: '#',
                                    src: 'https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67be011c728f01a64dcbd0ca_link%20icon.svg',
                                    alt: 'Copy Link',
                                },
                            ].map((icon, index) => (
                                <a
                                    key={index}
                                    href={icon.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="blog-single-social-link w-inline-block"
                                >
                                    <Image
                                        src={icon.src}
                                        alt={icon.alt}
                                        width={24}
                                        height={24}
                                        className="share-icon"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleContent;
