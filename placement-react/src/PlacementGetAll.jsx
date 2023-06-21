import React, {useState} from "react";
import axios, {Axios} from "axios"

function PlacementGetAll(props){
    
    const [placements, setPlacement] = useState([]);

    const handleOnClick = (event) =>{
        event.preventDefault();
        
        axios.get('https://localhost:44380/api/Placement',
        {headers: {'Content-Type':'application/json', 'Authorization':'Bearer l-EvC_irUnlygn6MlHbAV3j_ozadllp2dfNIXdsZNXPwO51LnuEQd0tkKWREFW5R_mnM5Qbv1HPfA0lFqfaz6sfYnn-qfclBrdHontV-Gm9Uhdb3A-GeOD7I3R6Qt1rSA8BmJ656MPjqaZ2yQXCUacuLVRPl_6pRBxKTLkx_OpW1swb8Mf3-ZCyLLQ94laSZv7S502YWOaKJFQWqDYKxhmzfk_ehtrXdrb0X2wirl-c2maR17RPnnnHDmT1VG3SOg5SSQqKgNADDfAK8xQA48fqrotnkOcH68hiywTB17uhLrcpLdVrKlHDfRU5vjUm2FFwFobwH6incA9_5hthwMtZXEN-tHdujVeszGfNvl1S9QH-oRfNHZ9E4_BY6Mn3y'}
        })
        .then((response) => {
            console.log(response.data);
            setPlacement(response.data);
        })
        .catch((error) => {
            console.error(error);
        })

    }

    return(
        <div>
            <button onClick={handleOnClick}>Get Aall</button>
        </div>
    )
}

export default PlacementGetAll;