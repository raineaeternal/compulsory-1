import { useEffect, useState } from "react";

export default function FFXIV() {
    // Get data from FFLogs, but their API is confusing, so this is postponed until further notice.
    // let [data, setData] = useState();

    // useEffect(() => {
    //     fetch("https://fflogs.com/api", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             "clientId": "9da0afde-735f-443f-8f67-7c840764a6cb",
    //         })
    //     }).;
    // }, [data]);


    return (
    <>
        <div>
            These are my accolades from FFXIV.
        </div>
    </>
    );
}
