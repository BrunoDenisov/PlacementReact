import React from "react";

function PlacementsTableRow({ placement }) {
    return (
        <tr>
            <td>{placement.Name}</td>
            <td>{placement.FinishOrder}</td>
        </tr>
    );
}

export default PlacementsTableRow;
