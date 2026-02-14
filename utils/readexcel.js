import fs from "fs"
import * as XLSX from "xlsx"

export function readExcel(filepath,sheetName)
{

    console.log("Reading Excel Data");
    
    const filecontent=fs.readFileSync(filepath)

    // convert data into json array-
    const wb=XLSX.read(filecontent,{type:"buffer"})

    const ws=wb.Sheets[sheetName]

    const data=XLSX.utils.sheet_to_json(ws,{defval:"",raw:true})

    return data

}