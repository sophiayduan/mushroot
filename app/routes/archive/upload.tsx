// uploadpage.tsx

import React, { useRef, useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import "./upload.css";

interface UploadPageProps {
    sidebarSrc?: string;
    mushroomIconSrc?: string;
}

const BACKEND_URL = "http://localhost:8080";

export default function UploadPage({
                                       sidebarSrc = "/hero-sidebar.png",
                                       mushroomIconSrc = "/mini-mush-3.png",
                                   }: UploadPageProps) {
    // replace your existing state/refs section
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [form, setForm] = useState({
        title: "",
        courseCode: "",
        year: "",
        teacherName: "",
    });

    const thumbnailInputRef = useRef<HTMLInputElement>(null);
    const pdfInputRef = useRef<HTMLInputElement>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setThumbnail(URL.createObjectURL(file));
            setThumbnailFile(file);
        }
    };

    async function handleSubmit() {
        if (!thumbnailFile || !pdfFile) {
            setError("Please attach both a thumbnail and a PDF.");
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
        fd.append("thumbnail", thumbnailFile);
        fd.append("data", pdfFile);

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${BACKEND_URL}/api/tests`, {
                method: "POST",
                body: fd,
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            // clear form on success
            setForm({ title: "", courseCode: "", year: "", teacherName: "" });
            setThumbnail(null);
            setThumbnailFile(null);
            setPdfFile(null);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="upload-page">

            {/* SIDEBAR */}
            <aside className="sidebar">

                <img
                    src={sidebarSrc}
                    alt=""
                    className="sidebar-bg"
                    aria-hidden="true"
                />
                <img
                    src="/title-logo.png"
                    alt="Mush Root"
                    className="mushroot-logo"
                />
                <Navbar mushroomIconSrc={mushroomIconSrc} mushroomCount={0} />

            </aside>

            {/* MAIN */}
            <main className="main-content">

                {/* LEFT */}
                <section className="left-column">

                    {/* THUMBNAIL */}
                    <div className="card thumbnail-card">

                        <h2 className="hand-title">thumbnail</h2>

                        {thumbnail ? (
                            <img
                                src={thumbnail}
                                alt="thumbnail"
                                className="thumbnail-preview"
                            />
                        ) : (
                            <div className="thumbnail-placeholder" />
                        )}

                        <input
                            ref={thumbnailInputRef}
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleThumbnailUpload}
                        />

                        <button
                            className="upload-btn"
                            onClick={() => thumbnailInputRef.current?.click()}
                        >
                            Upload
                        </button>

                    </div>

                    {/* PDF */}
                    <div
                        className="card pdf-card"
                        onClick={() => pdfInputRef.current?.click()}
                    >

                        <input
                            ref={pdfInputRef}
                            type="file"
                            accept=".pdf"
                            hidden
                            onChange={e => setPdfFile(e.target.files?.[0] ?? null)}
                        />

                        <h2 className="pdf-title">Upload here</h2>

                        <p className="pdf-subtitle">
                            Upload a PDF or drag
                            <br />
                            and drop your test
                            <br />
                            here!
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
                        placeholder="text here"
                    />

                    {/* SUBJECT + YEAR */}
                    <div className="row">

                        <div className="field-group">

                            <label className="field-label">
                                Subject
                            </label>

                            <input
                                className="field"
                                placeholder="Enter your course code"
                                name="courseCode"
                                value={form.courseCode}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="field-group year-group">

                            <label className="field-label">
                                Year
                            </label>

                            <div className="select-wrapper">

                                <select className="field select-field" name="year" value={form.year} onChange={handleChange}>
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
                        Tags
                    </label>

                    <textarea className="field tags-field" />

                </section>

            </main>

        </div>
    );
}