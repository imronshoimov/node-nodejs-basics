import { writeFile, existsSync } from "node:fs"
import path from "node:path"

const filePath = path.join(process.cwd(), "src", "fs", "files")
const content = "I am fresh and young"

const create = async (filePath, content) => {
  writeFile(filePath + "/fresh.txt", content, (err) => {
    if (err) throw err

    if (existsSync(filePath + "/fresh.txt")) {
      throw Error("FS operation failed")
    }

    console.log("The file has been saved!")
  })
}

await create(filePath, content)
