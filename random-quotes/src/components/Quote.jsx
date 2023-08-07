import React, { useState, useEffect } from "react";

import Button from "./Button";

function Quote() {
    const category = "";
    const apiKey = import.meta.env.VITE_API_KEY;
    // const apiKey = "wcNVOA+/n5QGd51EC3HAZQ==wAu2EJ2eesTrc2UY";
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchNewQuote = async () => {
        try {
            setIsLoading(true); // Set loading state to true before fetching
            const response = await fetch(
                `https://api.api-ninjas.com/v1/quotes?category=${category}`,
                {
                    method: "GET",
                    headers: {
                        "X-Api-Key": apiKey,
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const newData = await response.json();
            setData(newData);
        } catch (error) {
            console.error("Error: ", error);
        } finally {
            setIsLoading(false); // Set loading state to false after fetch is done
        }
    };

    const handleNewQuote = () => {
        fetchNewQuote();
    };

    useEffect(() => {
        fetchNewQuote(); // Fetch the initial quote on component mount
    }, []); // Empty dependency array to run only once on mount

    return (
        <div>
            {data ? (
                <div>
                    <div className="card" style={{ marginBottom: 10 }}>
                        <div className="card-body" style={{ paddingBottom: 0 }}>
                            <p className="card-text">"{data[0].quote}"</p>
                            <div className="text-end">
                                <p>— {data[0].author}</p>
                            </div>
                        </div>
                    </div>
                    {/* <button onClick={handleNewQuote} disabled={isLoading}>
                        {isLoading ? "Loading..." : "Generate New Quote"}
                    </button> */}
                    <Button onClick={handleNewQuote} disabled={isLoading}>
                        {isLoading ? "Loading..." : "Generate New Quote"}
                    </Button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Quote;
// import React, { useState, useEffect } from "react";

// function Quote() {
//     const category = "";
//     const apiKey = "wcNVOA+/n5QGd51EC3HAZQ==wAu2EJ2eesTrc2UY";
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     `https://api.api-ninjas.com/v1/quotes?category=${category}`,
//                     {
//                         method: "GET",
//                         headers: {
//                             "X-Api-Key": apiKey,
//                             "Content-Type": "application/json",
//                         },
//                     }
//                 );
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 const data = await response.json();
//                 setData(data);
//                 console.log(data);
//             } catch (error) {
//                 console.error("Error: ", error);
//             }
//         };

//         fetchData();
//     }, []);

//     // Render JSX based on the fetched data
//     // return (
//     //     <div>
//     //         {data ? (
//     //             <div>
//     //                 <div>
//     //                     <p>{data[currentQuoteIndex].quote}</p>
//     //                     <p>{data[currentQuoteIndex].author}</p>
//     //                 </div>
//     //                 <button onClick={handleNewQuote}>Generate New Quote</button>
//     //             </div>
//     //         ) : (
//     //             <p>Loading...</p>
//     //         )}
//     //     </div>
//     // );
//     return (
//         <div>
//             {data ? (
//                 <>
//                     <div>
//                         <p>{data[0].quote}</p>
//                         <p>{data[0].author}</p>
//                         {/* <p>{data[0].quote}</p> */}
//                         {/* {console.log(data[0])} */}
//                     </div>
//                     {/* {data.map((item) => (
//                         <div key={item.id}>
//                             <p>{item.quote}</p>
//                             <p>{item.author}</p>
//                         </div>
//                     ))} */}
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }

// export default Quote;
