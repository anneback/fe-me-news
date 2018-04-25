import React from 'react';

export const Menu = ({ links }) => (
    <ul>
        {links.map(item => (
					<li key={item.url}>
							<a className="footerItem" href={item.url}>{item.text}</a>
					</li>))}
    </ul>
)