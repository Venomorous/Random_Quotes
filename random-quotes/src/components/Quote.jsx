import React, { useState, useEffect } from "react";

import "../custom-button.css";
import Button from "./Button";

function Quote({ category }) {
    let localCategory = "";
    category === "All" ? (localCategory = "") : (localCategory = category);
    const apiKey = import.meta.env.VITE_API_KEY;
    // const apiKey = "wcNVOA+/n5QGd51EC3HAZQ==wAu2EJ2eesTrc2UY";
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchNewQuote = async () => {
        try {
            setIsLoading(true); // Set loading state to true before fetching
            console.log("Category: " + localCategory);
            const response = await fetch(
                `https://api.api-ninjas.com/v1/quotes?category=${localCategory}`,
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
    const handleCopyClick = (quote) => {
        navigator.clipboard.writeText(quote);
    };

    useEffect(() => {
        fetchNewQuote(); // Fetch the initial quote on component mount
    }, []); // Empty dependency array to run only once on mount

    return (
        <div>
            {data ? (
                <div>
                    <div className="card card-lg" style={{ marginBottom: 10 }}>
                        <div className="card-body" style={{ paddingBottom: 0 }}>
                            <p
                                className="card-text"
                                style={{ fontSize: "2rem" }}
                            >
                                "{data[0].quote}"
                            </p>
                            {/* <button
                                onClick={() => handleCopyClick(item.quote)}
                                className="btn btn-dark btn-sm"
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    // left: 0,
                                }}
                            >
                                <span class="material-symbols-outlined">
                                    content_copy
                                </span>
                            </button> */}
                            <button
                                onClick={() => handleCopyClick(data[0].quote)}
                                className="btn btn-dark btn-sm custom-button mb-2 mx-2"
                                data-bs-toggle="tooltip" // Enable tooltip
                                data-bs-placement="top" // Position the tooltip at the top
                                title="Copy to Clipboard" // Text for the tooltip
                            >
                                <span class="material-symbols-outlined">
                                    content_copy
                                </span>
                            </button>
                            <div
                                className="text-end"
                                style={{ fontSize: "1.2rem" }}
                            >
                                <p>— {data[0].author}</p>
                            </div>
                        </div>
                    </div>
                    {/* <button onClick={handleNewQuote} disabled={isLoading}>
                        {isLoading ? "Loading..." : "Generate New Quote"}
                    </button> */}
                    <div className="d-grid">
                        <Button
                            onClick={handleNewQuote}
                            disabled={isLoading}
                            fontSize={"1.5rem"}
                            color="secondary"
                        >
                            {isLoading ? "Loading..." : "Generate New Quote"}
                        </Button>
                    </div>
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
