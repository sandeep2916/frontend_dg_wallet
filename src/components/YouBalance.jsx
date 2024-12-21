import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { balanceState } from "../states";

export default function YourBalance(){

    const [userBalance, setUserBalance] = useRecoilState(balanceState);

    const token = localStorage.getItem("myToken");

    useEffect(() => {
        fetch("https://mern-paytm-backend.vercel.app/api/v1/account/balance", {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
            }
        }).then(res => res.json())
        .then(data => setUserBalance(data.balance))
    }, [])

    return (
        <>
            <h1 className="text-bold text-xl m-5">Your Balance: {userBalance}</h1>
            <hr />
        </>
    )
}