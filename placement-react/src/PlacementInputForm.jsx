import axios, { Axios } from "axios";
import React from "react";
import { useState, useEffect } from 'react';


function PlacementInputForm(props) {
    const { addPlacement } = props;

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

        const response = axios.post('https://localhost:44380/api/Placement', placement, {headers: {'Content-Type':'application/json', 'Authorization':'Bearer EgkYCBI9qVhCjV3l5KOoWWFQRa6zn-v48CKl6ycnRqcIv5aDL7Y21tOXbLWI0kPwpvOfW6NyJp90MCuFzWgzVrPSX5d7gOlZCZD-NmMtq8wK3Ww27OcBqqGuMA5YaCQJ8Cx4p4O6bX6YrvCn422KT_4S6rGDQoskKUhq-3pqfH8gIJaA8X9zlJwcG46CAD0sNHvg7kthT4RJmLzZLaEVu9pH_0Zx7UtCnNnFCIUHheP6RCxqQf8byI-eLoDFYn-VMs7ygQV8kMbfdPpkNs7wksBE_xXRUeYR0mXnnCp0GZTKIBlbQ2_7cGwbLWzvUZpfDtU7kdB9P2ej1mNIEvkHPfh2vTqlDN8LFUds84RhbUj6lUfTzAIqtE5ZY1Bmyw4_'}});

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