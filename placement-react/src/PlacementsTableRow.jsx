import React, {useState, useEffect} from "react";
import PlacementInputForm from "./PlacementInputForm";

function TableRow(props){
    
    const [rowData, setRowData] = useState({});

    const addTableRow = ()=>{
        const rowInput={
            name:"",
            finishOrder:""
        }
        setRowData([...rowData, rowInput]);
    }

    return(
        <tr>
            {rowData.name}
            {rowData.finishOrder}
        </tr>
    )
}