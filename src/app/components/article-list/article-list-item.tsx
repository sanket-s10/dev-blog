import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Styles from "./article-list-item.module.css";

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
        <li className={Styles["staff_item"]}>
            <Image
                src={image.src}
                alt={image.alt || ''}
                width={80}
                height={80}
                className={Styles["staff_avatar"]}
                loading="lazy"
            />
            <div className={Styles["w-layout-vflex"]}>
                <div className="mb-1">
                    <p
                        className={Styles["text-size-eyebrow"]}
                    >
                        {name}
                    </p>
                </div>
                <div className="mb-1">
                    <Link href={`/blog/${name}`}>
                        <h3 className={Styles["heading-style-h3"]}>{title}</h3>
                    </Link>
                </div>
                <p>{description}</p>
            </div>
        </li>
    );
};

export default ArticleListItem;
