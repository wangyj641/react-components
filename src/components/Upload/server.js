import express from 'express';
import multer from 'multer';
import cors from 'cors';

const app = express()
app.use(cors());

const upload = multer({
  dest: 'data/Upload/uploads'
})

app.post('/upload', upload.single('file'), function (req, res, next) {
  console.log('req.file', req.file);
  console.log('req.body', req.body);

  res.end(JSON.stringify({
    message: 'success'
  }));
})

app.listen(3333);
