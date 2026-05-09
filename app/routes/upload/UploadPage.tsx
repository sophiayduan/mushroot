// uploadpage.tsx

import React, { useRef, useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import styles from "./uploadpage.module.css";

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
    <div className={styles.uploadPage}>

      {/* SIDEBAR */}
      <aside className={styles.sidebar}>

        <img
          src={sidebarSrc}
          alt=""
          className={styles.sidebarBg}
          aria-hidden="true"
        />
        <img
          src="/title-logo.png"
          alt="Mush Root"
          className={styles.mushrootLogo}
        />
        <Navbar mushroomIconSrc={mushroomIconSrc} mushroomCount={0} />

      </aside>

      {/* MAIN */}
      <main className={styles.mainContent}>

        {/* LEFT */}
        <section className={styles.leftColumn}>

          {/* THUMBNAIL */}
          <div className={`${styles.card} ${styles.thumbnailCard}`}>

            <h2 className={styles.handTitle}>thumbnail</h2>

            {thumbnail ? (
              <img
                src={thumbnail}
                alt="thumbnail"
                className={styles.thumbnailPreview}
              />
            ) : (
              <div className={styles.thumbnailPlaceholder} />
            )}

            <input
              ref={thumbnailInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleThumbnailUpload}
            />

            <button
              className={styles.uploadBtn}
              onClick={() => thumbnailInputRef.current?.click()}
            >
              Upload
            </button>

          </div>

          {/* PDF */}
          <div
            className={`${styles.card} ${styles.pdfCard}`}
            onClick={() => pdfInputRef.current?.click()}
          >

            <input
              ref={pdfInputRef}
              type="file"
              accept=".pdf"
              hidden
            />

            <h2 className={styles.pdfTitle}>Upload here</h2>

            <p className={styles.pdfSubtitle}>
              Upload a PDF or drag
              <br />
              and drop your test
              <br />
              here!
            </p>

          </div>

        </section>

        {/* RIGHT */}
        <section className={styles.rightColumn}>

          {/* TITLE */}
          <input
            className={`${styles.field} ${styles.titleField}`}
            placeholder="Title"
          />

          {/* DESCRIPTION */}
          <label className={styles.fieldLabel}>
            Description
          </label>

          <textarea
            className={`${styles.field} ${styles.descriptionField}`}
            placeholder="text here"
          />

          {/* SUBJECT + YEAR */}
          <div className={styles.row}>

            <div className={styles.fieldGroup}>

              <label className={styles.fieldLabel}>
                Subject
              </label>

              <input
                className={styles.field}
                placeholder="Enter your course code"
              />

            </div>

            <div className={`${styles.fieldGroup} ${styles.yearGroup}`}>

              <label className={styles.fieldLabel}>
                Year
              </label>

              <div className={styles.selectWrapper}>

                <select className={`${styles.field} ${styles.selectField}`}>

                  <option value=""></option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>

                </select>

                <span className={styles.arrow}>⌄</span>

              </div>

            </div>

          </div>

          {/* TEACHER */}
          <input
            className={styles.field}
            placeholder="Enter your teacher’s name"
          />

          {/* TAGS */}
          <label className={styles.fieldLabel}>
            Tags
          </label>

          <textarea className={`${styles.field} ${styles.tagsField}`} />

        </section>

      </main>

    </div>
  );
}