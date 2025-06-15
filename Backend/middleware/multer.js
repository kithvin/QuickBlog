import multer from "multer";

// Configure multer to store files on disk with default settings

const upload = multer({storage:multer.diskStorage({})}); // Use default disk storage

export default upload; // Export the upload middleware