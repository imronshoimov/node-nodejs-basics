import fs from "fs"
import path from "path"

const filePath = path.join(
  process.cwd(),
  "src",
  "streams",
  "files",
  "fileToRead.txt"
)

const read = async (path) => {
  const readableStream = fs.createReadStream(path, "utf-8")

  readableStream.on("data", (chunk) => {
    process.stdout.write(chunk)
  })

  readableStream.on("end", () => {})

  readableStream.on("error", (error) => {
    throw Error("There is an error: ", error)
  })
}

await read(filePath)
