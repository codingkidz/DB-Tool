import React, { useEffect, useState } from "react";
import { RouteComponentProps, useNavigate } from "@reach/router";
import { db } from "../services/firebase";
import { Unit } from "../models/Unit";

interface Props extends RouteComponentProps { }

export const UploadPage: React.FC<Props> = () => {

    const navigate = useNavigate();

    useEffect(() => {

    })
    let data = "unit_3"

    const pushUnit = async () => {
        await db
            .collection("units")
            .add({data})
    }


    return (

        <button onClick={pushUnit}>push unit</button>
    )
}