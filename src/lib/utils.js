export const getFileName = path => {
  if (path.startsWith("[METADATA]")) {
    return path.substr(10);
  } else {
    var seed = path.split(/[/\\]/);
    return seed[seed.length - 1];
  }
};

export const formatBytes = len => {
  len = +len;
  if (len <= 1024) {
    return len.toFixed(0) + " B";
  }
  len /= 1024;
  if (len <= 1024) {
    return len.toFixed(1) + " KB";
  }
  len /= 1024;
  if (len <= 1024) {
    return len.toFixed(2) + " MB";
  }
  len /= 1024;
  return len.toFixed(3) + " GB";
};

export const formatSpeed = speed => {
  return formatBytes(speed) + "/s";
};

const pad = f => {
  return ("0" + f).substr(-2);
};

export const formatTime = time => {
  time = parseInt(time, 10);
  if (!time || !isFinite(time)) return "∞";
  var secs = time % 60;
  if (time < 60) return secs + "s";
  var mins = Math.floor((time % 3600) / 60);
  if (time < 3600) return pad(mins) + ":" + pad(secs);
  var hrs = Math.floor((time % 86400) / 3600);
  if (time < 86400) return pad(hrs) + ":" + pad(mins) + ":" + pad(secs);
  var days = Math.floor(time / 86400);
  return days + "::" + pad(hrs) + ":" + pad(mins) + ":" + pad(secs);
};
