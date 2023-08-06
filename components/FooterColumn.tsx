import Link from 'next/link';
import React from 'react'

type ColumnProps = {
    title: string;
    links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="footer_column">
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link) => <Link className='hover:scale-110 hover:font-[500] transition' href="/" key={link}>{link}</Link>)}
        </ul>
    </div>
);

export default FooterColumn;