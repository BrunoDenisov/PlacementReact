import React from "react";
import PlacementsTableRow from "./PlacementsTableRow";

function PlacementsTable({ placements }) {
    console.log(placements);

    return (
        <div className="placementsTable">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>FinishOrder</th>
                    </tr>
                </thead>
                <tbody>
                    {placements.map((placement, index) => (
                        <PlacementsTableRow key={index} placement={placement} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlacementsTable;
