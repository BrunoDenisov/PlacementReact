import React, {react, useState} from "react";
import axios, {Axios} from "axios";

function PlacementDelete(){

    const [placementId, setPlacementId] = useState("");

    const [placement, setPlacement] = useState({
        Name: "",
        FinishOrder: ""
    });

    const handleChangeId = (event) => {
        const { name, value } = event.target;
        setPlacementId(value);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPlacement({ ...placement, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPlacement({ Name: "", FinishOrder: "" })
        console.log(placement)

        axios.put('https://localhost:44380/api/Placement', {
            params: {id:placementId},
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer EgkYCBI9qVhCjV3l5KOoWWFQRa6zn-v48CKl6ycnRqcIv5aDL7Y21tOXbLWI0kPwpvOfW6NyJp90MCuFzWgzVrPSX5d7gOlZCZD-NmMtq8wK3Ww27OcBqqGuMA5YaCQJ8Cx4p4O6bX6YrvCn422KT_4S6rGDQoskKUhq-3pqfH8gIJaA8X9zlJwcG46CAD0sNHvg7kthT4RJmLzZLaEVu9pH_0Zx7UtCnNnFCIUHheP6RCxqQf8byI-eLoDFYn-VMs7ygQV8kMbfdPpkNs7wksBE_xXRUeYR0mXnnCp0GZTKIBlbQ2_7cGwbLWzvUZpfDtU7kdB9P2ej1mNIEvkHPfh2vTqlDN8LFUds84RhbUj6lUfTzAIqtE5ZY1Bmyw4_'
            }
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        })
    };

    return(
        <div>
            <>
            <div className='PlacementForm'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='Name'>Name: </label>
                    <br />
                    <input type="text" name="Name" id="placementName" value={placement.Name || ""} onChange={handleChange} />
                    <br />
                    <label htmlFor='FinishOrder'>Finish order:</label>
                    <br />
                    <input type="text" name="FinishOrder" id="placementFinishOrder" value={placement.FinishOrder || ""} onChange={handleChange} />
                    <br />
                    <label htmlFor="Id">Id:</label>
                    <br />
                    <input type="uuid" name="Id" id="placementId" value={placementId} onChange={handleChangeId} />
                    <br />
                    <input type="submit" />
                    <br />
                </form>
            </div>
        </>
        </div>
    )
}

export default PlacementDelete;