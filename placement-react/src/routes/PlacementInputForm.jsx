import axios, { Axios } from "axios";
import React from "react";
import { useState, useEffect } from 'react';


function PlacementInputForm(props) {

    const [placements, setPlacements] = useState([]);

     const addPlacement = (newPlacmenet) => {
    setPlacements([...placements, newPlacmenet]);
    }

    const [placement, setPlacement] = useState({
        Name: "",
        FinishOrder: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPlacement({ ...placement, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addPlacement(placement);
        setPlacement({ Name: "", FinishOrder: "" })
        console.log(placement)

        const response = axios.post('https://localhost:44380/api/Placement', placement, {headers: {'Content-Type':'application/json', 'Authorization':'Bearer FBcipAmCfhp6P4HUASL9X9FjOu0gSSZuBoIeUASHwy-iQm_QnKysE2a04bwt__ezEmH7CyKIiX6vUPZgif609DBEDr6i-0rJ7Vg26kszERU0L1djSFRi2pzXGWkmJ5R6WPhZ9_TuqP1F9CTefW936f50uIaztyzpu5rRbgJjUc8RAh8lbz0gLCwzQRPS8AovC_Utv4VbS9AsP7dQvWBBgYPIqe4kPsEmRrhW4AMx5ctgmAG6Bh_yQgfayw86icy6Dsk4jH6BxbYq7cIjCZfJOOc4HtAOd2Q9qZIy2yPAmLVio9-FGsdTFEWYrN-_6GRoNMUbvRSsoyPY6S9PikGQQPe4c5HFCEIp1jkPWudnUn3rsT8R_TNZFPoEwCXwiT8o'}});

        console.log(response);
    };

    // fetch('/api/Placement', {
    //     method: 'POST',
    //     headers:{'Content-type':'application/x-www-form-urlencoded', 'Authorization':'Bearer 9Dge9Xz1KwWyqVg_iT7afekCmoxDeL-HIG-JoUm-jY8LYXhvt-0dAeZ5WyzgO3z7RyhsdkLejdrroYdziS3jHyzwR1y_W0BNfUcQ_1sV-VMJuK1Rr9yfWA_Eubgj5flav04NzVw7ChzsmUlh-_MfnXVidD8ALVe0nbRqtRan9C7bxF8y-6lnwWYg1hmwpw-ib5z6aUbQNoDn_dMJip3gtbp0MXZNcmodcx8RSQv5a2V7BTSmm1rtoXQxW6Bdrq8lvxEIptNOfbDMmYldi7r1L9X71Czl7LJ0beQSpmoOchlXFN3K77NQHASIQAEKzhX29oKeW2_Tp030ZjaCpNaAXKPM4ebbcmqpznRIOPOUdOcwdV0AqJKQRU5HmRDvCs1m'},
    //     body: placement
    // }).then(r=>r.json()).then(res=>{
    //     if(res){
    //         console.log("Row inserted")
    //     }
    // })

    return (
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
                    <input type="submit" />
                    <br />
                </form>
            </div>
        </>
    );
}

export default PlacementInputForm;