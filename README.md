# 🖼️ Image-to-text-Extract

A simple client-side web app that extracts text from images using OCR.

---

## 🔍 Features

- Drop or upload an image (PNG, JPG, JPEG, GIF).
- Instant text extraction via client-side OCR.
- View and copy recognized text directly in the browser.
- Minimalistic UI built with HTML, CSS, and JavaScript.

---

## 🚀 Demo

> (Insert screenshot or GIF of the tool in action)

---

## 🧩 Files

```text
/                   ← Root directory
├── index.html       ← Main UI
├── style.css        ← Stylesheet
├── main.js          ← JavaScript logic + OCR integration
└── /images          ← UI assets (icons, demos, etc.)
```

## ⚙️ Setup
Option 1: Open locally
Double-click index.html in your browser.

Option 2: Serve from a local web server
bash
Copy

```
# Using Python 3
python3 -m http.server 8000
open http://localhost:8000
```
## 🧠 How It Works
main.js:
- Handles image upload via drag‑drop or file input.
- Reads file with FileReader.
- Runs OCR using Tesseract.js.
- Outputs recognized text into the UI.

Note: OCR occurs entirely in the browser—no back-end needed.

## 🛠️ Customize
- Tweak tesseract.js options (e.g., language, worker count, OCR configurations).
- Enhance UX: add loading indicators, progress bar.
- Support more file formats (PNG, TIFF, PDFs, etc.).
