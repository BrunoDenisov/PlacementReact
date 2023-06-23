import React, { useState } from "react";
import axios, { Axios } from "axios"

function PlacementGetById(props) {
    const [placements, setPlacements] = useState([]);

    const [placementId, setPlacementId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.get('https://localhost:44380/api/Placement', {
            params: { eventId: placementId },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer FBcipAmCfhp6P4HUASL9X9FjOu0gSSZuBoIeUASHwy-iQm_QnKysE2a04bwt__ezEmH7CyKIiX6vUPZgif609DBEDr6i-0rJ7Vg26kszERU0L1djSFRi2pzXGWkmJ5R6WPhZ9_TuqP1F9CTefW936f50uIaztyzpu5rRbgJjUc8RAh8lbz0gLCwzQRPS8AovC_Utv4VbS9AsP7dQvWBBgYPIqe4kPsEmRrhW4AMx5ctgmAG6Bh_yQgfayw86icy6Dsk4jH6BxbYq7cIjCZfJOOc4HtAOd2Q9qZIy2yPAmLVio9-FGsdTFEWYrN-_6GRoNMUbvRSsoyPY6S9PikGQQPe4c5HFCEIp1jkPWudnUn3rsT8R_TNZFPoEwCXwiT8o',
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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="placementId">Id:</label>
                <br />
                <input type="uuid" name="placementId" id="placementId" value={placementId} onChange={handleChange} />
                <br />
                <button type="submit">Get placement by event id</button>
            </form>
        </>
    )
};

export default PlacementGetById;