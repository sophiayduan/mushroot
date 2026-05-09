import "./archive.css";
import TestCard from "../../components/testCard";
import TestFilter from "../../components/testFilter";
import type {Test} from "../../types/test.tsx";

import { useState, useEffect } from "react";

const BACKEND_URL = "http://localhost:8080";

function Archive() {
    const [tests, setTests] = useState<Test[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${BACKEND_URL}/api/tests`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data: Test[]) => setTests(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []); // empty array = run once on mount

    if (loading) return <div>Loading...</div>;
    if (error)   return <div>Error: {error}</div>;

    return (
        <div className="archive">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {tests.map(test => (
                    <TestCard key={test.id} test={test} />
                ))}
            </div>
        </div>
    );
}


export default Archive;