import multer from 'multer';
import path from 'path';

const uploadsFolder = path.resolve(__dirname, 'uploads');

const storage = multer.diskStorage({
  destination: uploadsFolder,
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

export const upload = multer({ storage });