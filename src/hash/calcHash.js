import { createHmac } from "node:crypto"
import { readFile } from "node:fs"
import path from "node:path"

const secret = "something"
const filePath = path.join(
  process.cwd(),
  "src",
  "hash",
  "files",
  "fileToCalculateHashFor.txt"
)

const calculateHash = async (secret, path) => {
  readFile(path, "utf-8", (err, data) => {
    if (err) throw err

    const hash = createHmac("sha256", secret).update(data).digest("hex")

    console.log(hash)
  })
}

await calculateHash(secret, filePath)
