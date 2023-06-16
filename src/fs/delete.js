import { unlink, existsSync } from "node:fs"
import path from "node:path"

const filePath = path.join(
  process.cwd(),
  "src",
  "fs",
  "files",
  "fileToRemove.txt"
)

const remove = async (path) => {
  // checking if file exists or not
  if (!existsSync(path)) {
    throw Error("FS operation failed")
  }

  // deleting file
  unlink(path, (err) => {
    if (err) throw err

    console.log("Deleted successfully!")
  })
}

await remove(filePath)
