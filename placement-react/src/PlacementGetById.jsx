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
                'Authorization': 'Bearer 2Ezk99rAMrcZey-vlGXJ3q12bvHcdtBz0QuVrdqeaiuh8KfAMBCQsATwwCCwjhQaaFaUtYj_9TxiI_gzATJ2XWXvDViCym-HaOq18xD2GM37GgSC1Wh7l9ByXOGJ9UZYRA_JTz5VRKJF74-OrX30tJ0LFc6PzRu5ZGhSv2YiIUp2bzauDo4A-sLlF3WBhKkXEAY_kOBxqoKO7seA8kTyYAa-kIGibKK2XjVgk5SI7MJOkRBQEPV-5Q2IWEkrtAMMbY6TyAjy3BApXCGbkOe6tgh0mid1HieXx56SQ2Guvc8w6hyDIRAhmFZhRw2NHB1ddyE-cqXtyPpqUMiusSkilOtVbHPE314eJBjb2JUgcaB8fPFskkY8n1rbwG5J7Nkm',
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
                <label htmlFor="placementId">Id</label>
                <br />
                <input type="uuid" name="placementId" id="placementId" value={placementId} onChange={handleChange} />
                <button type="submit">Get placement by event id</button>
            </form>
        </>
    )
};

export default PlacementGetById;