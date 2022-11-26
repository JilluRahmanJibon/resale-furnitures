import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = email => {
    const [token, setToken] = useState('')
    // console.log(email);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_ApiUrl}jwt?email=${email}`).then(res => {
            if (res.data.accessToken) {
                localStorage.setItem('access-token', res.data.accessToken)
                setToken(res.data.accessToken)
            }
        })
    }, [email])
    return [token]
};

export default useToken;