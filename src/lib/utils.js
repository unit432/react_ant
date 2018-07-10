export const getFileName = (path) => {
  if (path.startsWith("[METADATA]")){
    return path.substr(10)
  } else {
    var seed = path.split(/[/\\]/)
    return seed[seed.length - 1]
  }
}
