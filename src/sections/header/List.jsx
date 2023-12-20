import React from 'react'

function List({ url, ami }) {
    // let { url, ami } = props;
    return (
        <li><a href={url}>{ami}</a></li>
    )
}
export default List