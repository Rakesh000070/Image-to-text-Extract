<<<<<<< HEAD
function onOpenCvReady() {
  const imageInput = document.getElementById("imageInput");
  const output = document.getElementById("output");
  const loaderOverlay = document.querySelector(".overlay");

  function showLoader() {  // Show the loader overlay
    loaderOverlay.style.display = "flex";
  }

  function hideLoader() {  // Hide the loader overlay
    loaderOverlay.style.display = "none";
  }

  imageInput.addEventListener("change", async (event) => {
    const files = Array.from(event.target.files);
    output.textContent = "🔄 Processing images...\n\n";

    showLoader(); // Show the loader before processing

    for (const file of files) {
      try {
        output.textContent += `📂 Loading ${file.name}...\n`;

        const image = await createImageBitmap(file);
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.getContext("2d").drawImage(image, 0, 0);

        const src = cv.imread(canvas);
        const gray = new cv.Mat();
        const blurred = new cv.Mat();
        const thresh = new cv.Mat();
        const resized = new cv.Mat();

        // Image Processing with OpenCV
        cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
        cv.GaussianBlur(gray, blurred, new cv.Size(5, 5), 0);
        cv.threshold(blurred, thresh, 0, 255, cv.THRESH_BINARY + cv.THRESH_OTSU);

        const kernel = cv.getStructuringElement(cv.MORPH_RECT, new cv.Size(3, 3));
        cv.morphologyEx(thresh, thresh, cv.MORPH_CLOSE, kernel);

        cv.resize(thresh, resized, new cv.Size(0, 0), 2, 2, cv.INTER_LINEAR);

        const outCanvas = document.createElement("canvas");
        outCanvas.width = resized.cols;
        outCanvas.height = resized.rows;
        cv.imshow(outCanvas, resized);
        const base64 = outCanvas.toDataURL("image/png");

        const { data } = await Tesseract.recognize(base64, 'eng', {
          logger: m => console.log(m.status, `${Math.round(m.progress * 100)}%`),
          tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;!?()[]{}@%+-=<>/$#\'" \n',
          tessedit_pageseg_mode: 6
        });

        const cleanText = data.text.trim() || "(No readable text found)";
        output.textContent += `
=======================================
🖼 File: ${file.name}

📝 Extracted Text:
${cleanText}
=======================================\n\n`;

        // Clean up memory
        src.delete(); gray.delete(); blurred.delete();
        thresh.delete(); resized.delete(); kernel.delete();
      } catch (err) {
        output.textContent += `
=======================================
🖼 File: ${file.name}

❌ Error: ${err.message}
=======================================\n\n`;
      }
    }

    hideLoader();
    output.textContent += "✅ All files processed!";
  });
}
=======
function onOpenCvReady() {
  const imageInput = document.getElementById("imageInput");
  const output = document.getElementById("output");
  const loaderOverlay = document.querySelector(".overlay");

  function showLoader() {
    loaderOverlay.style.display = "flex";
  }

  function hideLoader() {
    loaderOverlay.style.display = "none";
  }

  imageInput.addEventListener("change", async (event) => {
    const files = Array.from(event.target.files);
    output.textContent = "🔄 Processing images...\n\n";

    showLoader();

    for (const file of files) {
      try {
        output.textContent += `📂 Loading ${file.name}...\n`;

        const image = await createImageBitmap(file);
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.getContext("2d").drawImage(image, 0, 0);

        const src = cv.imread(canvas);
        const gray = new cv.Mat();
        const blurred = new cv.Mat();
        const thresh = new cv.Mat();
        const resized = new cv.Mat();

        // Image Processing with OpenCV
        cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
        cv.GaussianBlur(gray, blurred, new cv.Size(5, 5), 0);
        cv.threshold(blurred, thresh, 0, 255, cv.THRESH_BINARY + cv.THRESH_OTSU);

        const kernel = cv.getStructuringElement(cv.MORPH_RECT, new cv.Size(3, 3));
        cv.morphologyEx(thresh, thresh, cv.MORPH_CLOSE, kernel);

        cv.resize(thresh, resized, new cv.Size(0, 0), 2, 2, cv.INTER_LINEAR);

        const outCanvas = document.createElement("canvas");
        outCanvas.width = resized.cols;
        outCanvas.height = resized.rows;
        cv.imshow(outCanvas, resized);
        const base64 = outCanvas.toDataURL("image/png");

        const { data } = await Tesseract.recognize(base64, 'eng', {
          logger: m => console.log(m.status, `${Math.round(m.progress * 100)}%`),
          tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;!?()[]{}@%+-=<>/$#\'" \n',
          tessedit_pageseg_mode: 6
        });

        const cleanText = data.text.trim() || "(No readable text found)";
        output.textContent += `
=======================================
🖼 File: ${file.name}

📝 Extracted Text:
${cleanText}
=======================================\n\n`;

        // Clean up memory
        src.delete(); gray.delete(); blurred.delete();
        thresh.delete(); resized.delete(); kernel.delete();
      } catch (err) {
        output.textContent += `
=======================================
🖼 File: ${file.name}

❌ Error: ${err.message}
=======================================\n\n`;
      }
    }

    hideLoader();
    output.textContent += "✅ All files processed!";
  });
}
>>>>>>> 8565370890dd99cb2484e0d67532d363be975368
