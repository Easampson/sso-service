import React from 'react';

const Layout = ({ content}) => (
    <div>
        <div id="page-content">
            {content()}
        </div>
    </div>
);
export default Layout;