import React from "react";
import { useState, useEffect } from 'react';


function PlacementInputForm(props) {

    const [placements, setPlacements] = useState([]);

    const [placement, setPlacement] = useState({
        name: "",
        finishOrder: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPlacement({ ...placement, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setPlacements((prevPlacements) => [...prevPlacements, placement]);

        setPlacement({ name: "", finishOrder: "" })
    };

    useEffect(() => {
        console.log(placements);
    }, [placements]);

    return (
        <>
            <div className='PlacementForm'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='placementName'>Name: </label>
                    <br />
                    <input type="text" name="placementName" id="placementName" value={placement.placementName || ""} onChange={handleChange} />
                    <br />
                    <label htmlFor='placementFinishOrder'>Finish order:</label>
                    <br />
                    <input type="text" name="placementFinishOrder" id="placementFinishOrder" value={placement.placementFinishOrder || ""} onChange={handleChange} />
                    <br />
                    <input type="submit" />
                    <br />
                </form>
            </div>
        </>
    );
}

export default PlacementInputForm;