import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, "../data/uploads")
    },filename: function (req, file, cb){
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})


const upload = multer({storage})


app.post("/resumeUpload", upload.single("file") ,(req, res) => {
  console.log(req.file);
  console.log(req.body)
  console.log("hellllo");
  res.send({ status: 200, message: "job is done" });
});


app.listen(8000, () => {
  console.log("server is running on port 8000");
});
