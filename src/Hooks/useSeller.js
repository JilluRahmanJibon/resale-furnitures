import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_ApiUrl}users/seller/${email}`).then(res => res.json()).then(result => {
                setIsSeller(result.isSeller)
                setIsSellerLoading(false)
            })
        }
    }, [email])
    return [isSeller, isSellerLoading]

}
export default useSeller 