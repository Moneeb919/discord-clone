"use client"

import { useEffect, useState } from "react"
import { CreateServerModal } from "../modals/create-server-modal"

export const ModalProviders = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <CreateServerModal />
        </>
    )
}