import { fetchJobs, systemReqBuilder } from "./aria2c";

describe("fetchJob", () => {
  describe("systemReqBuilder", () => {
    let jsonreq;

    beforeEach(() => {
      jsonreq = { jsonrpc: "2.0", id: "netant" };
    });

    it("builds multicall", () => {
      jsonreq.method = "system.multicall";
      expect(systemReqBuilder("multicall")).toEqual(jsonreq);
    });
  });
});
