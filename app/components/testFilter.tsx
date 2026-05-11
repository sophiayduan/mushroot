type TestFilterProps = {
    courses: string[];
    selectedCourse: string;
    onCourseChange: (course: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    sortOrder: "newest" | "oldest";
    onSortChange: (order: "newest" | "oldest") => void;
    tags: string[];
    selectedTag: string;
    onTagChange: (tag: string) => void;
}

function TestFilter({ courses, selectedCourse, onCourseChange, searchQuery, onSearchChange, sortOrder, onSortChange, tags, selectedTag, onTagChange }: TestFilterProps) {
    return (
        <div className="flex gap-3 p-4 flex-wrap">
            <input
                type="text"
                placeholder="Search by title or teacher…"
                value={searchQuery}
                onChange={e => onSearchChange(e.target.value)}
                className="bg-[#BECCC0] rounded-lg text-[#435245] px-3 py-2 flex-1"
            />
            <select
                value={selectedCourse}
                onChange={e => onCourseChange(e.target.value)}
                className="bg-[#BECCC0] rounded-lg text-[#435245] px-3 py-2"
            >
                <option value="">All courses</option>
                {courses.map(c => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>
            <select
                value={selectedTag}
                onChange={e => onTagChange(e.target.value)}
                className="bg-[#BECCC0] rounded-lg text-[#435245] px-3 py-2"
            >
                <option value="">All tags</option>
                {tags.map(t => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>
            <select
                value={sortOrder}
                onChange={e => onSortChange(e.target.value as "newest" | "oldest")}
                className="bg-[#BECCC0] rounded-lg text-[#435245] px-3 py-2"
            >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
            </select>
        </div>
    );
}

export default TestFilter;