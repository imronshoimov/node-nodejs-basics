import { writeFile, existsSync } from "node:fs"
import path from "node:path"

const folderPath = path.join(process.cwd(), "src", "fs", "files")
const content = "I am fresh and young"

const create = async (folderPath, content) => {
  writeFile(folderPath + "/fresh.txt", content, (err) => {
    if (err) throw err

    if (existsSync(folderPath + "/fresh.txt")) {
      throw Error("FS operation failed")
    }

    console.log("Created successfully!")
  })
}

await create(folderPath, content)
