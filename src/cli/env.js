const parseEnv = () => {
  const rssPrefix = "RSS_"

  const rssVariables = Object.keys(process.env)
    .filter((key) => key.startsWith(rssPrefix))
    .map((key) => `${key}=${process.env[key]}`)

  console.log(rssVariables.join("; "))
}

parseEnv()
