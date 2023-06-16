import { existsSync, readFile } from "node:fs"
import path from "node:path"

const filePath = path.join(
  process.cwd(),
  "src",
  "fs",
  "files",
  "fileToRead.txt"
)

const read = async (path) => {
  // checking if file exists or not
  if (!existsSync(path)) {
    throw Error("FS operation failed")
  }

  readFile(path, "utf-8", (err, data) => {
    if (err) throw err

    console.log(data)
  })
}

await read(filePath)
