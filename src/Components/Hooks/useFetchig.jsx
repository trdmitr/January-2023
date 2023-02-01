import { useState } from "react"

export const useFetching = (callback) => {
const [isLoading, setIsloading] = useState(true);
const [error, setError] = useState('');

const fetching = async () => {
     setIsloading(true)
    try {  
      await callback()   
        setIsloading(false)
    } catch(e) {
        setError(e.message);

    } finally {
        setIsloading(false)
    }   
}
return [fetching, isLoading, error]
}