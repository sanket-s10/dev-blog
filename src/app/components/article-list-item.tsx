import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ArticleListItemProps {
    name: string;
    title: string;
    description: string;
    image: {
        src: string;
        alt?: string;
    };
}

const ArticleListItem: React.FC<ArticleListItemProps> = ({ name, title, description, image }) => {
    return (
        <li className="staff_item">
            <Image
                src={image.src}
                alt={image.alt || ''}
                width={80}
                height={80}
                className="staff_avatar"
                loading="lazy"
            />
            <div className="w-layout-vflex">
                <div className="margin-bottom-16">
                    <p
                        className="text-size-eyebrow"
                        style={{
                            opacity: 1,
                            transform:
                                'translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        {name}
                    </p>
                </div>
                <div className="margin-bottom-16">
                    <Link href={`/blog/${name}`}>
                        <h3 className="heading-style-h3">{title}</h3>
                    </Link>
                </div>
                <p>{description}</p>
            </div>
        </li>
    );
};

export default ArticleListItem;
