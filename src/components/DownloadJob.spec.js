import React from "react";
import DownloadJob from "./DownloadJob";
import { shallow, configure, mount } from "enzyme";
import { formatSpeed, formatBytes } from "../lib/utils";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

function setup() {
  const props = {
    gid: "2089b05ecca3d829",
    bittorrent: {
      info: {
        name: "archlinux.iso"
      }
    },
    status: "active",
    downloadSpeed: 157457,
    uploadSpeed: 2658,
    totalLength: 7373821579,
    completedLength: 2591637504,
    uploadLength: 36929536
  };

  const enzymeWrapper = mount(<DownloadJob {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("DownloadJobs", () => {
  let props = {};

  const { enzymeWrapper } = setup();

  it("renders a row has download status", () => {
    const secondRow = enzymeWrapper.find(".ant-list-item").at(0);
    const tags = secondRow.find("Tag");
    expect(tags.length).toEqual(9);
    expect(tags.at(0).text()).toEqual("active");
    expect(tags.at(1).text()).toEqual(formatSpeed(157457));
    expect(tags.at(2).text()).toEqual(formatSpeed(2658));
    expect(tags.at(7).text()).toEqual("0.01");
    expect(tags.at(8).text()).toBe("35.15%");
  });

  it("renders a row has a mini progress bar", () => {
    const listItem = enzymeWrapper.find(".ant-list-item").at(0);
    expect(listItem.find("Progress").length).toEqual(1);
  });

  it("paused job only show status, file size, download size tags", () => {
    const enzymeWrapper = mount(
      <DownloadJob {...{ ...props, status: "paused" }} />
    );
    const tags = enzymeWrapper.find("Tag");
    expect(tags.length).toEqual(4);
  });

  it("failed job only show status, file size, download size tags", () => {
    const enzymeWrapper = mount(
      <DownloadJob {...{ ...props, status: "error" }} />
    );
    const tags = enzymeWrapper.find("Tag");
    expect(tags.length).toEqual(4);
  });

  it("active job show all tags", () => {
    const enzymeWrapper = mount(
      <DownloadJob {...{ ...props, status: "active" }} />
    );
    const tags = enzymeWrapper.find("Tag");
    expect(tags.length).toEqual(9);
  });

  describe("renders names properly", () => {
    let props = {};

    it("for Torrent download", () => {
      const bittorrent = { info: { name: "archlinux.iso" } };
      const enzymeWrapper = mount(
        <DownloadJob {...{ ...props, bittorrent: bittorrent }} />
      );
      const listItem = enzymeWrapper.find(".ant-list-item").at(0);
      const fileName = listItem.find(".ant-list-item-meta-title");
      expect(fileName.text()).toEqual("archlinux.iso");
    });

    it("for Magnet download", () => {
      const bittorrent = {};
      const files = [
        { path: "[METADATA]4f9d9c3b38eef9893a445b6bcc0b4b3b8da14900" }
      ];
      const enzymeWrapper = mount(
        <DownloadJob {...{ ...props, bittorrent: bittorrent, files: files }} />
      );
      const listItem = enzymeWrapper.find(".ant-list-item").at(0);
      const fileName = listItem.find(".ant-list-item-meta-title");
      expect(fileName.text()).toEqual(
        "4f9d9c3b38eef9893a445b6bcc0b4b3b8da14900"
      );
    });

    it("for URI download", () => {
      const files = [
        { path: "/home/bob/CentOS-7-aarch64-Everything-1804.iso" }
      ];
      const enzymeWrapper = mount(
        <DownloadJob {...{ ...props, files: files }} />
      );
      const listItem = enzymeWrapper.find(".ant-list-item").at(0);
      const fileName = listItem.find(".ant-list-item-meta-title");
      expect(fileName.text()).toEqual("CentOS-7-aarch64-Everything-1804.iso");
    });
  });

  describe("render tags color properly", () => {
    let props = {};

    it("active job using blue color tags", () => {
      const enzymeWrapper = mount(
        <DownloadJob {...{ ...props, status: "active" }} />
      );
      const tags = enzymeWrapper.find("Tag");
      expect(tags.at(0).props().color).toEqual("blue");
    });

    it("paused job using blue color tags", () => {
      const enzymeWrapper = mount(
        <DownloadJob {...{ ...props, status: "paused" }} />
      );
      const tags = enzymeWrapper.find("Tag");
      expect(tags.at(0).props().color).toEqual("blue");
    });

    it("failed job using red color tags", () => {
      const enzymeWrapper = mount(
        <DownloadJob {...{ ...props, status: "error" }} />
      );
      const tags = enzymeWrapper.find("Tag");
      expect(tags.at(0).props().color).toEqual("red");
    });

    it("completed job using green color tags", () => {
      const enzymeWrapper = mount(
        <DownloadJob {...{ ...props, status: "complete" }} />
      );
      const tags = enzymeWrapper.find("Tag");
      expect(tags.at(0).props().color).toEqual("green");
    });
  });

  describe("render tag text properly", () => {
    let props = {};

    it("render estimated time in day:hour:mintue format", () => {
      const enzymeWrapper = mount(
        <DownloadJob
          {...{
            ...props,
            downloadSpeed: 157457,
            totalLength: 7373821579,
            completedLength: 2591637504,
            status: "active"
          }}
        />
      );
      const tags = enzymeWrapper.find("Tag");
      expect(tags.at(3).text()).toEqual("08:26:11");
    });

    it("render file size in GB/MB/KB format", () => {
      const enzymeWrapper = mount(
        <DownloadJob
          {...{
            ...props,
            status: "active",
            totalLength: 7373821579,
            completedLength: 2591637504,
            uploadLength: 157457
          }}
        />
      );
      const tags = enzymeWrapper.find("Tag");
      expect(tags.at(4).text()).toEqual("6.867 GB");
      expect(tags.at(5).text()).toEqual("2.414 GB");
      expect(tags.at(6).text()).toEqual("153.8 KB");
    });
  });

  describe("render tag icon properly", () => {
    let props = {};

    it("render pause-circle-o icon for paused job", () => {
      const enzymeWrapper = mount(
        <DownloadJob {...{ ...props, status: "paused" }} />
      );
      const icons = enzymeWrapper.find("Tag").find("Icon");
      expect(icons.at(0).props().type).toEqual("pause-circle");
    });

    it("render play-circle icon for active job", () => {
      const enzymeWrapper = mount(
        <DownloadJob {...{ ...props, status: "active" }} />
      );
      const icons = enzymeWrapper.find("Tag").find("Icon");
      expect(icons.at(0).props().type).toEqual("play-circle");
    });

    it("render check-circle icon for complete job", () => {
      const enzymeWrapper = mount(
        <DownloadJob {...{ ...props, status: "complete" }} />
      );
      const icons = enzymeWrapper.find("Tag").find("Icon");
      expect(icons.at(0).props().type).toEqual("check-circle");
    });

    it("render close-circle icon for error job", () => {
      const enzymeWrapper = mount(
        <DownloadJob {...{ ...props, status: "error" }} />
      );
      const icons = enzymeWrapper.find("Tag").find("Icon");
      expect(icons.at(0).props().type).toEqual("close-circle");
    });
  });

  describe("render control button properly", () => {
    let props = {};

    it("active job show pause button", () => {
      const enzymeWrapper = mount(
        <DownloadJob {...{ ...props, status: "active" }} />
      );
      const lis = enzymeWrapper.find(".ant-list-item-action").find("li");
      expect(
        lis
          .at(0)
          .find("Icon")
          .props().type
      ).toEqual("pause-circle");
    });

    it("paused job show start button", () => {
      const enzymeWrapper = mount(
        <DownloadJob {...{ ...props, status: "paused" }} />
      );
      const lis = enzymeWrapper.find(".ant-list-item-action").find("li");
      expect(
        lis
          .at(0)
          .find("Icon")
          .props().type
      ).toEqual("play-circle");
    });
  });
});
