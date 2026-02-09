"use client";

import {useState} from "react";
import {SignInFlow} from "@/features/auth/types";

export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>()
    return (
        <div>
            Auth Screen
        </div>
    )
}