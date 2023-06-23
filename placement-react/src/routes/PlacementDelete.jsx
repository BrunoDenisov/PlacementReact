import React, {useState} from "react";
import axios, {Axios} from "axios";

function PlacementDelte(props){

    const [placementId, setPlacementId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.delete('https://localhost:44380/api/Placement', {
            params: { Id: placementId },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer EgkYCBI9qVhCjV3l5KOoWWFQRa6zn-v48CKl6ycnRqcIv5aDL7Y21tOXbLWI0kPwpvOfW6NyJp90MCuFzWgzVrPSX5d7gOlZCZD-NmMtq8wK3Ww27OcBqqGuMA5YaCQJ8Cx4p4O6bX6YrvCn422KT_4S6rGDQoskKUhq-3pqfH8gIJaA8X9zlJwcG46CAD0sNHvg7kthT4RJmLzZLaEVu9pH_0Zx7UtCnNnFCIUHheP6RCxqQf8byI-eLoDFYn-VMs7ygQV8kMbfdPpkNs7wksBE_xXRUeYR0mXnnCp0GZTKIBlbQ2_7cGwbLWzvUZpfDtU7kdB9P2ej1mNIEvkHPfh2vTqlDN8LFUds84RhbUj6lUfTzAIqtE5ZY1Bmyw4_',
            }
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPlacementId(value);
    };

    return(
        <>
        <div>
        <form onSubmit={handleSubmit}>
                <label htmlFor="placementId">Id:</label>
                <br />
                <input type="uuid" name="placementId" id="placementId" value={placementId} onChange={handleChange} />
                <br />
                <button type="submit">Delete by Id</button>
            </form>
        </div>
        </>
    )
}

export default PlacementDelte;