import sharp from "sharp";
import fs from "fs";

interface ResizeImage {
    height?: number;
    width?: number;
}
const resizeImage = async (opts: ResizeImage = {}) => {
   fs.readFile("src/test-photo.jpg", async (err, data) => {
       if (err) throw err;
           const image = await sharp(data);
           image.resize(opts).toFile("output.png", (err) => {
               if (err) throw err;
           });
    });
}
resizeImage();
