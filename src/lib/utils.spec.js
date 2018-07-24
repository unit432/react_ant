import { formatTime, formatSpeed, getFileName, formatBytes } from "./utils";

describe("getFileName", () => {
  it("returns file name from path", () => {
    const path = "/home/bob/ubuntu-18.04-desktop-amd64.iso";
    expect(getFileName(path)).toEqual("ubuntu-18.04-desktop-amd64.iso");
  });

  it("returns meta data from path", () => {
    const path = "[METADATA]4f9d9c3b38eef9893a445b6bcc0b4b3b8da14900";
    expect(getFileName(path)).toEqual(
      "4f9d9c3b38eef9893a445b6bcc0b4b3b8da14900"
    );
  });
});

describe("formatBytes", () => {
  it("format fileSize to proper format", () => {
    expect(formatBytes(1024)).toEqual("1024 B");
  });
});

describe("formatSpeed", () => {
  it("format file transfer speed to proper format", () => {
    expect(formatSpeed(1024)).toEqual("1024 B/s");
  });
});

describe("formatTime", () => {
  it("format time to proper format", () => {
    expect(formatTime(24)).toEqual("24s");
    expect(formatTime(1024)).toEqual("17:04");
    expect(formatTime(451024)).toEqual("5::05:17:04");
    expect(formatTime("NA")).toEqual("∞");
  });
});
