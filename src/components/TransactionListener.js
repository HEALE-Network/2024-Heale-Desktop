import React, { useEffect, useState } from 'react';
import echo from '../echo';
const TransactionListener = () => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        const channel = echo.channel('transactions');
        channel.listen('TransactionUpdated', (event) => {
            console.log('TransactionUpdated:', event.data);
            setTransactions((prevTransactions) => [...prevTransactions, event.data]);
        });
        return () => {
            channel.stopListening('TransactionUpdated');
        };
    }, []);
    return (
        <div>
            <h1>Transactions</h1>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>{JSON.stringify(transaction)}</li>
                ))}
            </ul>
        </div>
    );
};
export default TransactionListener;