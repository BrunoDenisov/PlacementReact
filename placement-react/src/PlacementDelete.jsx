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
                'Authorization': 'Bearer znIQnnq5VAuACKCmjNfsAZz-Ct_jI5g7hcIuKCylKod3-scdIDHI5yBmoNm6aL3TLseug3c0IJYgCuIX5_s-dBMRLGKUhjLoxlvx8c6GsKjixbwjrUoaMT86I6r0V1XXa8n6IZGhR6MaOt5_gxIz8_sLg-Pkacm99iTtkrFxhacZKVklAwoKQioVh0JOL9LMO-1FQeJ1Bk6VbCsIK72Ab7qbmVHN-Gxo9NgpWupT6ZOMTZVOgcFhrS2eRJt_k0ZXGQkoQ5Rt_kRHnBmGUjKgbzbZhmSde4NHoYPSQBlec3j03JclRmxtplcXBYSCAXInjqJtZH9x-3tKJk-oNohkpvWflr4JttB7_4pHmB-7DCgZdETciSJ54G8mhaJLe5Qz',
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