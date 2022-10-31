import { useReducer, createContext, useContext, useRef } from 'react';

const initialState = { issues: [], isLastIssue: false };

const issueReducer = (state, payload) => {
  const { issues, pageNumber } = payload;
  if (issues.length === 0) {
    state.isLastIssue = true;
    return { ...state };
  }
  state.issues = [...state.issues, ...issues];
  if (pageNumber === 1) {
    state.issues.splice(4, 0, 'advertisement');
  }
  return { ...state };
};

const IssueStateContext = createContext();
const IssueDispatchContext = createContext();
const IssueNextPageContext = createContext();

export const IssueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(issueReducer, initialState);
  const nextPageNumber = useRef(1);
  return (
    <IssueStateContext.Provider value={state}>
      <IssueDispatchContext.Provider value={dispatch}>
        <IssueNextPageContext.Provider value={nextPageNumber}>{children}</IssueNextPageContext.Provider>
      </IssueDispatchContext.Provider>
    </IssueStateContext.Provider>
  );
};

export const useIssueState = () => {
  return useContext(IssueStateContext);
};

export const useIssueDispatch = () => {
  return useContext(IssueDispatchContext);
};

export const useIssueNextPageNumber = () => {
  return useContext(IssueNextPageContext);
};
