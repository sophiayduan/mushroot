export type Test = {
    id: number;
    title: string;
    courseCode: string;
    year: number;
    teacherName: string;
    thumbnail: string | null;  // base64 string from JSON, not byte[]
    data: string | null;       // same
    tags?: string[];
};