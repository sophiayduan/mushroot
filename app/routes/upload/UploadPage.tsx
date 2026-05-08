// uploadpage.tsx

import React, { useRef, useState } from "react";
import Navbar from "./navbar";
import "./uploadpage.css";

interface UploadPageProps {
  sidebarSrc?: string;
  mushroomIconSrc?: string;
}

export default function UploadPage({
  sidebarSrc = "/hero-sidebar.png",
  mushroomIconSrc = "/mini-mush-3.png",
}: UploadPageProps) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);

  const handleThumbnailUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
    }
  };

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

        </section>

        {/* RIGHT */}
        <section className="right-column">

          {/* TITLE */}
          <input
            className="field title-field"
            placeholder="Title"
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
              />

            </div>

            <div className="field-group year-group">

              <label className="field-label">
                Year
              </label>

              <div className="select-wrapper">

                <select className="field select-field">

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
            placeholder="Enter your teacher’s name"
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