type State = {
  data: any,
  isLoading: boolean,
  error: null | any
}

type Action = {
  type: string,
  payload?: any
}

export const apiInitialState: State = {
  data: null,
  isLoading: false,
  error: null
}


export const apiReducer = (state: State = apiInitialState, action: Action) => {
  switch (action.type) {
    case 'FETCHING':
      return { data: null, isLoading: true, error: null };
    case 'SUCCESS':
      console.log('SUCCESS in reducer', action)
      return { data: action.payload, isLoading: false, error: null };
    case 'ERROR':
      return { data: null, isLoading: false, error: action.payload };
    default:
      throw new Error( `Not supported action ${action.type}` );
  }
};