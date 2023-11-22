"use client";

import { ImSpinner8 } from "react-icons/im";

export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <ImSpinner8 size={64} className="animate-spin text-[#ff62c7]" />
        </div>
    );
}
