import "./archive.css";
import TestCard from "../../components/testCard";
import TestFilter from "../../components/testFilter";
import type { Test } from "../../../types/test";

import { useState, useEffect } from "react";

const BACKEND_URL = "http://localhost:8080";

function Archive() {
    const [tests, setTests] = useState<Test[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
    const [selectedTag, setSelectedTag] = useState("");

    useEffect(() => {
        fetch(`${BACKEND_URL}/api/tests`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data: Test[]) => setTests(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const tags = [...new Set(tests.flatMap(t => t.tags ?? []))].sort();
    const courses = [...new Set(tests.map(t => t.courseCode))].sort();

    const filteredTests = tests
        .filter(test => {
            const matchesCourse = !selectedCourse || test.courseCode === selectedCourse;
            const matchesTag = !selectedTag || test.tags?.includes(selectedTag);
            const q = searchQuery.toLowerCase();
            const matchesSearch = !q
                || test.title.toLowerCase().includes(q)
                || test.teacherName.toLowerCase().includes(q);
            return matchesCourse && matchesTag && matchesSearch;
        })
        .sort((a, b) => sortOrder === "newest" ? b.year - a.year : a.year - b.year);

    if (loading) return <div className="global-content p-8">Loading...</div>;
    if (error) return <div className="global-content p-8">Error: {error}</div>;

    return (
        <div className="">
            <TestFilter
                courses={courses}
                selectedCourse={selectedCourse}
                onCourseChange={setSelectedCourse}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortOrder={sortOrder}
                onSortChange={setSortOrder}
                tags={tags}
                selectedTag={selectedTag}
                onTagChange={setSelectedTag}
            />

            {filteredTests.length === 0
                ? <div className="p-8 text-center text-[#AABDA0]">No tests found</div>
                : <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {filteredTests.map(test => (
                        <TestCard key={test.id} test={test} />
                    ))}
                </div>
            }
        </div>
    );
}

export default Archive;