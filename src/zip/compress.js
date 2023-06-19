import { createReadStream, createWriteStream } from "node:fs"
import { createGzip } from "zlib"
import path from "node:path"

const folderPath = path.join(process.cwd(), "src", "zip", "files")
const inputFile = path.join(folderPath, "fileToCompress.txt")
const outputFile = path.join(folderPath, "archive.gz")

const compress = async (inputFile, outputFile) => {
  const handleStream = createReadStream(inputFile)

  handleStream
    .pipe(createGzip())
    .pipe(createWriteStream(outputFile))
    .on("finish", () => {
      console.log("Compressing finished!")
    })
}

await compress(inputFile, outputFile)
