import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.rates || {}); // Store the rates object or empty object if undefined
                console.log(res.rates); // Log the rates for debugging
            })
            .catch((error) => {
                console.error('Error fetching currency data:', error);
                setData({}); // Handle error by resetting data
            });

    }, [currency]); // Dependency array with currency

    return data;
}

export default useCurrencyInfo;