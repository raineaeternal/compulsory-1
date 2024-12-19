import React from "react";

type HeroProps = {
    children: React.ReactNode;
    className?: React.ReactNode;
}

export default function Hero({ ...props }: HeroProps) {
    return (
        <>
            <div className="flex flex-col gap-10 text-white w-[1024px] items-start">
                {props.children}
            </div>
        </>
    );
}