import path from "path"
import fs from "fs"
import { release, version } from "os"
import * as http from "http"
import * as cFile from "./files/c.js"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const random = Math.random()

let unknownObject
const filePath = path.join(process.cwd(), "src", "modules", "files")

if (random > 0.5) {
  unknownObject = fs.readFileSync(filePath + "/a.json", "utf-8")
} else {
  unknownObject = fs.readFileSync(filePath + "/b.json", "utf-8")
}

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${path.sep}"`)

console.log(`Path to current file is ${__filename}`)
console.log(`Path to current directory is ${__dirname}`)

const myServer = http.createServer((_, res) => {
  res.end("Request accepted")
})

const PORT = 3000

console.log(unknownObject)

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
  console.log("To terminate it, use Ctrl+C combination")
})

export default {
  unknownObject,
  myServer,
}
