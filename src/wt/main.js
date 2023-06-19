import { Worker, isMainThread } from "worker_threads"
import path from "path"
import os from "os"

const workerFile = path.join(process.cwd(), "src", "wt", "worker.js")

const performCalculations = async (workerFile) => {
  const numCores = os.cpus().length
  const results = []

  function handleWorkerMessage(index, result) {
    results[index] = result

    if (results.length === numCores) {
      console.log(results)
    }
  }

  if (isMainThread) {
    for (let i = 0; i < numCores; i++) {
      const worker = new Worker(workerFile, { workerData: i + 10 })

      worker.on("message", (result) => {
        handleWorkerMessage(i, result)
      })

      worker.on("error", () => {
        handleWorkerMessage(i, { status: "error", data: null })
      })
    }
  }
}

await performCalculations(workerFile)
