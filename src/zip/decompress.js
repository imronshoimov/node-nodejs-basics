import { createReadStream, createWriteStream } from "node:fs"
import { createUnzip } from "zlib"
import path from "node:path"

const folderPath = path.join(process.cwd(), "src", "zip", "files")
const inputFile = path.join(folderPath, "archive.gz")
const outputFile = path.join(folderPath, "fileToCompress.txt")

const decompress = async (inputFile, outputFile) => {
  const handleStream = createReadStream(inputFile)

  handleStream
    .pipe(createUnzip())
    .pipe(createWriteStream(outputFile))
    .on("finish", () => {
      console.log("Decompressing finished!")
    })
}

await decompress(inputFile, outputFile)
