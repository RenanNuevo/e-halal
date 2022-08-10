import React from "react";

export default function Badge({ display }) {
    return (
        <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full ml-2">
            {display}
        </span>
    )
}
