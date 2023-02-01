import Papa from "papaparse";
export default class SheetServce {
    static filePrasing = () => new Promise((resolve)=> {
        Papa.parse(url,
        {
         download: true,
         header: true,
         complete: (results) => {
                  return results.data
                  
                 }
                  
        })    
       })
}  
