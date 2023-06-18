import fs from "fs"
import path from "path"

const filePath = path.join(
  process.cwd(),
  "src",
  "streams",
  "files",
  "fileToWrite.txt"
)

const write = async (path) => {
  const writableStream = fs.createWriteStream(path, "utf-8")

  process.stdin.pipe(writableStream)
  console.log("Type to write: ")

  writableStream.on("finish", () => {})

  writableStream.on("error", (error) => {
    throw Error("There is an error: ", error)
  })
}

await write(filePath)
