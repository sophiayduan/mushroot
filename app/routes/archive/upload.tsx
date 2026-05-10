// uploadpage.tsx

import React, {useRef, useState} from "react";
import Navbar from "../../components/NavBar/Navbar";
import "./upload.css";

interface UploadPageProps {
    sidebarSrc?: string;
    mushroomIconSrc?: string;
}

const BACKEND_URL = "http://localhost:8080";

export default function UploadPage({}: UploadPageProps) {
    // replace your existing state/refs section
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [tagsInput, setTagsInput] = useState("");

    const [form, setForm] = useState({
        title: "",
        courseCode: "",
        year: "",
        teacherName: "",
    });

    const thumbnailInputRef = useRef<HTMLInputElement>(null);
    const pdfInputRef = useRef<HTMLInputElement>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        setForm(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setThumbnail(URL.createObjectURL(file));
            setThumbnailFile(file);
        }
    };

    async function handleSubmit() {
        if (!pdfFile) {
            setError("Please attach a PDF.");
            return;
        }
        if (!form.title || !form.courseCode || !form.year || !form.teacherName) {
            setError("Please fill in all fields.");
            return;
        }

        const fd = new FormData();
        fd.append("title", form.title);
        fd.append("courseCode", form.courseCode);
        fd.append("year", form.year);
        fd.append("teacherName", form.teacherName);
        fd.append("data", pdfFile);

        const tags = tagsInput
            .split("\n")
            .map(t => t.trim())
            .filter(t => t.length > 0);

        tags.forEach(tag => fd.append("tags", tag));

        // use uploaded thumbnail or fall back to default
        if (thumbnailFile) {
            fd.append("thumbnail", thumbnailFile);
        } else {
            const defaultRes = await fetch("/thumbnailFiller.png");
            const defaultBlob = await defaultRes.blob();
            fd.append("thumbnail", defaultBlob, "thumbnailFiller.png");
        }

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${BACKEND_URL}/api/tests`, {
                method: "POST",
                body: fd,
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            setForm({title: "", courseCode: "", year: "", teacherName: ""});
            setThumbnail(null);
            setThumbnailFile(null);
            setPdfFile(null);
            setTagsInput("");

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="upload-page">

           {/* MAIN */}
            <main className="main-content">

                {/* LEFT */}
                <section className="left-column">

                    {/* THUMBNAIL */}
                    <div
                        className="card thumbnail-card overflow-hidden"
                        onClick={() => thumbnailInputRef.current?.click()}
                        onDragOver={e => e.preventDefault()}
                        onDrop={e => {
                            e.preventDefault();
                            const file = e.dataTransfer.files?.[0];
                            if (file && file.type.startsWith("image/")) {
                                setThumbnail(URL.createObjectURL(file));
                                setThumbnailFile(file);
                            }
                        }}
                    >
                        <input
                            ref={thumbnailInputRef}
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleThumbnailUpload}
                        />

                        {thumbnail ? (
                            <img src={thumbnail} alt="thumbnail" className="thumbnail-preview"/>
                        ) : (
                            <div className="flex flex-col items-center">
                                <h2 className="thumbnail-title">Thumbnail</h2>
                                <p className="thumbnail-subtitle">
                                    Upload an image or drag
                                    <br/>
                                    and drop your thumbnail here!
                                    <br/>
                                    (optional)
                                </p>
                            </div>
                        )}
                    </div>

                    {/* PDF */}
                    <div
                        className="card pdf-card"
                        onClick={() => pdfInputRef.current?.click()}
                        onDragOver={e => e.preventDefault()}
                        onDrop={e => {
                            e.preventDefault();
                            const file = e.dataTransfer.files?.[0];
                            if (file && file.type === "application/pdf") {
                                setPdfFile(file);
                            }
                        }}
                    >
                        <input
                            ref={pdfInputRef}
                            type="file"
                            accept=".pdf"
                            hidden
                            onChange={e => setPdfFile(e.target.files?.[0] ?? null)}
                        />

                        <h2 className="pdf-title">{pdfFile ? pdfFile.name : "Test PDF"}</h2>

                        <p className="pdf-subtitle">
                            {pdfFile ? "Click or drag to replace" : <>Upload a PDF or drag<br />and drop your test here!</>}
                        </p>
                    </div>

                    {/*UPLOAD*/}
                    {error && (
                        <p className="error-text">{error}</p>
                    )}

                    <button
                        className="upload-btn"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Uploading…" : "Upload"}
                    </button>

                </section>

                {/* RIGHT */}
                <section className="right-column">

                    {/* TITLE */}
                    <input
                        className="field title-field"
                        placeholder="Title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                    />

                    {/* DESCRIPTION */}
                    <label className="field-label">
                        Description
                    </label>

                    <textarea
                        className="field description-field"
                        placeholder="text here (optional)"
                    />

                    {/* SUBJECT + YEAR */}
                    <div className="row">

                        <div className="field-group">

                            <label className="field-label">
                                Subject
                            </label>

                            <div className="select-wrapper">

                                <select className="field select-field" name="courseCode" value={form.courseCode}
                                        onChange={handleChange}>
                                    <option value=""></option>
                                    <option>MHF4U</option>
                                    <option>MCV4U</option>
                                    <option>SCH4U</option>
                                    <option>SPH4U</option>
                                    <option>SBI4U</option>
                                    <option>ICS4U</option>
                                    <option>ENG4U</option>
                                </select>

                                <span className="arrow">⌄</span>

                            </div>

                        </div>

                        <div className="field-group year-group">

                            <label className="field-label">
                                Year
                            </label>

                            <div className="select-wrapper">

                                <select className="field select-field" name="year" value={form.year}
                                        onChange={handleChange}>
                                    <option value=""></option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                </select>

                                <span className="arrow">⌄</span>

                            </div>

                        </div>

                    </div>

                    {/* TEACHER */}
                    <input
                        className="field"
                        placeholder="Enter your teacher's name"
                        name="teacherName"
                        value={form.teacherName}
                        onChange={handleChange}
                    />

                    {/* TAGS */}
                    <label className="field-label">
                        Tags <span style={{fontSize: "12px", opacity: 0.6}}>(one per line)</span>
                    </label>

                    <textarea
                        className="field tags-field"
                        value={tagsInput}
                        onChange={e => setTagsInput(e.target.value)}
                        placeholder={"Trivial\nApplications\nUnit 4"}
                    />

                </section>

            </main>

        </div>
    );
}