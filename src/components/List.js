import React, { Component, useState } from "react";
import { useSelector } from "react-redux";

import Item from "./Item";

export default function List() {
    const items = useSelector((state) => state.bicycle.items);

    return (
        <div>
            {items.map((item) => {
                return <Item item={item} key={item.id} />;
            })}
        </div>
    );
}
