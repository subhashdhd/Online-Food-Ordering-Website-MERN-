import React, { useContext, useEffect, useState } from 'react'
import "./Verify.css"
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Verify = () => {


    const [serchParams, setSearchParams] = useState();
    const success = serchParams.get("success");
    const orderId = serchParams.get("orderId");

    const navigate = useNavigate();

    const { url } = useContext(StoreContext);
    const verifyPayment = async () => {
        const response = await axios.post(url + "/api/order/verify", { success, orderId });
        if (response.data.success) {
            navigate("/myorders")
        }
        else {
            navigate("/")
        }
    }


    useEffect(() => {
        verifyPayment();
    }, [])
    
    return (
        <div className='verify'>
            <div className='spinner'>

            </div>
        </div>
    )
}

export default Verify
