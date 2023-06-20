import React, {useState} from "react";
import axios, {Axios} from "axios"

function PlacementGetAll(props){
    
    const [placements, setPlacement] = useState([]);

    const handleOnClick = (event) =>{
        event.preventDefault();
        
        axios.get('https://localhost:44380/api/Placement',
        {headers: {'Content-Type':'application/json', 'Authorization':'Bearer 2Ezk99rAMrcZey-vlGXJ3q12bvHcdtBz0QuVrdqeaiuh8KfAMBCQsATwwCCwjhQaaFaUtYj_9TxiI_gzATJ2XWXvDViCym-HaOq18xD2GM37GgSC1Wh7l9ByXOGJ9UZYRA_JTz5VRKJF74-OrX30tJ0LFc6PzRu5ZGhSv2YiIUp2bzauDo4A-sLlF3WBhKkXEAY_kOBxqoKO7seA8kTyYAa-kIGibKK2XjVgk5SI7MJOkRBQEPV-5Q2IWEkrtAMMbY6TyAjy3BApXCGbkOe6tgh0mid1HieXx56SQ2Guvc8w6hyDIRAhmFZhRw2NHB1ddyE-cqXtyPpqUMiusSkilOtVbHPE314eJBjb2JUgcaB8fPFskkY8n1rbwG5J7Nkm'}
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