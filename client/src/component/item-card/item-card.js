import React from 'react';

const ItemCard = ({ face = "", price = 0, size = 0, date = "" }) =>
{

    const now = new Date();
    const d = new Date(date);
    const differenceInDays = (now.getTime() - d.getTime()) / (1000 * 3600 * 24);

    const weekday = [
        "Sunday",
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ];

    // const newDate = (differenceInDays <= 14 ? Math.floor(differenceInDays) + " Days ago" : date)
    let newDate = "";

    if (differenceInDays <= 14) {
        newDate = Math.floor(differenceInDays) + " Days ago";
        if (differenceInDays < 2) {
            newDate = "Today";
        }
    }
    else {
        newDate = `on ${weekday[d.getDay()]}, ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
    }

    return (
        <div className="child " >
            <div className="child-photo animate">
                <p style={{ fontSize: size + 'px' }}>{face}</p>
            </div>
            <div className="child-body">
                <p className="price">{(price / 100).toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                <p>{newDate}</p>
            </div>
        </div>

    )
}

export default ItemCard;