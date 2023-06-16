import { existsSync, readdirSync } from "node:fs"
import path from "node:path"

const folderPath = path.join(process.cwd(), "src", "fs", "files")

const list = async (path) => {
  // checking if folder exists or not
  if (!existsSync(path)) {
    throw Error("FS operation failed")
  }

  // reading files folder and copying all its content to files_copy folder
  const files = readdirSync(path)

  console.log(files)
}

await list(folderPath)
