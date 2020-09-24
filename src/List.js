import React from 'react';
import NameList from './NameList.js'
function List() {
    const data = [
        {
            id:1,
            name: "Iron Man",
            production: "Marvel Universe"
        },
        {
            id:2,
            name: "Superman",
            production: "DC Comics"
        },
        {
            id:3,
            name: "Captain America",
            production: "Marvel Universe"
        },
        {
            id:4,
            name: "Batman",
            production: "DC Comics"
        }
    ]
    const recommendList = data.map(details =>
        <NameList key={details} detail={details} />)
    return (
        <div class="container">
            {recommendList}
        </div>
    )
}
export default List