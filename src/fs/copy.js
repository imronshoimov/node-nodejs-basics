import { existsSync, readdirSync, mkdir, copyFile } from "node:fs"
import path from "node:path"

const folderPath = path.join(process.cwd(), "src", "fs")
const originalFilesFolder = path.join(folderPath, "files")
const copiedFilesFolder = path.join(folderPath, "files_copy")

const copy = async (originalFolder, copiedFolder) => {
  // checking files_copy or files folder
  if (!existsSync(originalFolder) || existsSync(copiedFolder)) {
    throw Error("FS operation failed")
  }

  // creating files_copy folder
  mkdir(copiedFolder, { recursive: true }, (err) => {
    if (err) throw err
  })

  // reading files folder and copying all its content to files_copy folder
  const files = readdirSync(originalFolder)

  files.forEach((file) => {
    file = "/" + file

    copyFile(originalFolder + file, copiedFolder + file, (err) => {
      if (err) throw err
    })
  })

  console.log("Copied successfully!")
}

await copy(originalFilesFolder, copiedFilesFolder)
