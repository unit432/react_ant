import axios from "axios";

export const fetchData = (host, port, action, params) => {
  const jsonreq = systemReqBuilder(action, params);
  return axios.post("http://" + host + ":" + port + "/jsonrpc", jsonreq);
};

export const systemReqBuilder = (name, params) => {
  return {
    jsonrpc: "2.0",
    id: "netant",
    method: "system." + name,
    params: params
  };
};
