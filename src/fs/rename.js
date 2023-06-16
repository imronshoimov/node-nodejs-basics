import { renameSync, existsSync } from "node:fs"
import path from "node:path"

const folderPath = path.join(process.cwd(), "src", "fs", "files")
const oldFileName = path.join(folderPath, "wrongFilename.txt")
const newdFileName = path.join(folderPath, "properFilename.md")

const rename = async (oldFileName, newFileName) => {
  // checking oldFileName and newFileName
  if (!existsSync(oldFileName) || existsSync(newFileName)) {
    throw Error("FS operation failed")
  }

  // renaming file name
  renameSync(oldFileName, newFileName)

  console.log("Renamed successfully!")
}

await rename(oldFileName, newdFileName)
