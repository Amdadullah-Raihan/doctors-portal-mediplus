import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setServices] = useState();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLoading(false)
            })
    }, [])

    return{
        services, setServices,isLoading
    }

}
export default useServices;