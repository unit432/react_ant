export const getFileName = (path) => {
  if (path.startsWith("[METADATA]")){
    return path.substr(10)
  } else {
    var seed = path.split(/[/\\]/)
    return seed[seed.length - 1]
  }
}

export const formatBytes = (len) => {
  len = +len
  if (len <= 1024) {
    return len.toFixed(0)  + " B"
  }
  len /= 1024
  if (len <= 1024) {
    return len.toFixed(1) + " KB"
  }
  len /= 1024
  if (len <= 1024) {
    return len.toFixed(2) + " MB"
  }
  len /= 1024
  return len.toFixed(3) + " GB"
}

export const formatSpeed = (speed) => {
  return formatBytes(speed) + "/s"
}
