import React, {useState, useRef } from "react";
import "./uploadpage.css";

interface UploadPageProps {
  sidebarSrc?: string;
  mushroomIconSrc?: string;
}

const UploadPage: React.FC<UploadPageProps> = ({
  sidebarSrc = "/public/hero-sidebar.png",
  mushroomIconSrc = "/public/mini-mush-3.png",
}) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [teacher, setTeacher] = useState("");
  const [tags, setTags] = useState("");
 
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
 
  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setThumbnail(url);
    }
  };
 
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "application/pdf") {
      console.log("PDF dropped:", file.name);
    }
  };
 
  return (
    <div className="upload-page">
      <img src={sidebarSrc} alt="Sidebar" className="sidebar-image" />
 
      <main className="main-content">
        <section className="middle-col">
          <div className="green-box thumbnail-box">
            <p className="box-label">Thumbnail</p>
 
            {thumbnail ? (
              <img src={thumbnail} alt="Thumbnail preview" className="thumbnail-preview" />
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
 
          <div
            className={`green-box drop-box ${dragOver ? "drop-box--active" : ""}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input ref={fileInputRef} type="file" accept=".pdf" hidden />
            <p className="drop-title">Upload here</p>
            <p className="drop-sub">Upload a PDF or drag and drop your test here!</p>
          </div>
        </section>
 
        <section className="right-col">
          <input
            className="green-input title-input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
 
          <label className="field-label">Description</label>
          <textarea
            className="green-input description-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
 
          <div className="row-fields">
            <div className="field-group">
              <label className="field-label">Subject</label>
              <input
                className="green-input"
                placeholder="Enter your course code"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
 
            <div className="field-group">
              <label className="field-label">Year</label>
              <div className="select-wrapper green-input">
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="" disabled hidden></option>
                  {["2021", "2022", "2023", "2024", "2025", "2026"].map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
                <span className="select-arrow">›</span>
              </div>
            </div>
          </div>
 
          <input
            className="green-input"
            placeholder="Enter your teacher's name"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          />
 
          <label className="field-label">Tags</label>
          <textarea
            className="green-input tags-input"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </section>
      </main>
    </div>
  );
};

export default UploadPage;