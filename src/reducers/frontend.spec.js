import frontend from "./frontend";
import {
  TOGGLE_JOB_FORM,
  TOGGLE_SIDE_MENU,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_SUCCESS
} from "../actions/actionTypes";

describe("frontend reducers", () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      errorMessage: [],
      hideSideMenu: true,
      isFetching: true,
      showAddJobForm: false,
      fetchFailed: true
    };
  });

  it("should handle initial state", () => {
    expect(frontend(initialState, {})).toEqual(initialState);
  });

  describe("TOGGLE_SIDE_MENU action", () => {
    it("should toggle hide_side_menu state", () => {
      expect(
        frontend(initialState, { type: TOGGLE_SIDE_MENU }).hideSideMenu
      ).toEqual(false);
    });
  });

  describe("FETCH_JOBS_REQUEST action", () => {
    it("should set isFetching state to true", () => {
      expect(
        frontend(initialState, { type: FETCH_JOBS_REQUEST }).isFetching
      ).toEqual(true);
    });
  });

  describe("FETCH_JOBS_FAILURE action", () => {
    const errorString = "Newwork Error";
    it("should set fetchFailed to true", () => {
      expect(
        frontend(initialState, { type: FETCH_JOBS_FAILURE, error: errorString })
          .fetchFailed
      ).toEqual(true);
    });

    it("should update errorMessage in store", () => {
      expect(
        frontend(initialState, { type: FETCH_JOBS_FAILURE, error: errorString })
          .errorMessage
      ).toEqual([errorString]);
    });

    it("should clear prevous error message", () => {
      initialState.errorMessage.push("Server is down.");
      expect(
        frontend(initialState, { type: FETCH_JOBS_FAILURE, error: errorString })
          .errorMessage
      ).toEqual([errorString]);
    });
  });

  describe("FETCH_JOBS_SUCCESS action", () => {
    it("should set isFetching to false", () => {
      expect(
        frontend(initialState, { type: FETCH_JOBS_SUCCESS }).isFetching
      ).toEqual(false);
    });

    it("should set fetchFailed to false", () => {
      expect(
        frontend(initialState, { type: FETCH_JOBS_SUCCESS }).fetchFailed
      ).toEqual(false);
    });
  });

  describe("TOGGLE_JOB_FORM action", () => {
    it("should toggle showAddJobForm to true", () => {
      expect(
        frontend(initialState, { type: TOGGLE_JOB_FORM }).showAddJobForm
      ).toEqual(true);
    });

    it("should toggle showAddJobForm to false", () => {
      const currentState = { ...initialState, showAddJobForm: true };
      expect(
        frontend(currentState, { type: TOGGLE_JOB_FORM }).showAddJobForm
      ).toEqual(false);
    });
  });
});
