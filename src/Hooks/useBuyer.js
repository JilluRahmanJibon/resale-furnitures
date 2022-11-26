import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_ApiUrl}users/buyer/${email}`).then(res => res.json()).then(result => {
                setIsBuyer(result.isBuyer)
                setIsBuyerLoading(false)
            })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]

}
export default useBuyer 