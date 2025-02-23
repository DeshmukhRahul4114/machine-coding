import React, { useEffect, useState } from 'react';

const InfiniteScroll = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch data function
    const fetchData = async () => {
        return new Promise((resolve) => {
            const arr = Array.from({ length: 20 }, (_, index) => `id is ${userData.length + index}`);
            console.log(arr, "arrarr1arr");
            setUserData((prev) => [...prev, ...arr]);
            resolve(true);
        });
    };

    // Initial fetch of data
    useEffect(() => {
        fetchData();
    }, []);

    // Infinite scroll logic
    useEffect(() => {
        const infiniteScrollFun = async () => {
            // Avoid fetching if loading is true
            if (loading) return;

            // Check if we have scrolled near the bottom
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.scrollHeight - 10
            ) {
                setLoading(true);
                await fetchData();
                setLoading(false);
            }
        };

        window.addEventListener("scroll", infiniteScrollFun);

        return () => window.removeEventListener("scroll", infiniteScrollFun);
    }, [loading]); // Only depend on loading, not userData

    return (
        <div style={{ width: "70%", height: '500px', overflowY: 'scroll' }}>
            {loading && <div>Loading...</div>}
            {!loading &&
                userData.map((data, index) => (
                    <div key={index}>{data}</div>
                ))}
        </div>
    );
};

export default InfiniteScroll;
