import axios from "axios";
import
{
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../dataTypes";

export const getData = () =>
{
  return ( dispatch ) =>
  {
    dispatch( dataRequest() );
    axios
      .get( "https://www.reddit.com/r/webdev.json?limit=50" )
      .then( ( response ) =>
      {
        // response.data is the data
        const data = response.data;
        dispatch( dataSuccess( data.data.children ) );
      } )
      .catch( ( error ) =>
      {
        // error.message is the error message
        dispatch( dataFailure( error.message ) );
      } );
  };
};

export const dataRequest = () =>
{
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const dataSuccess = ( data ) =>
{
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const dataFailure = ( error ) =>
{
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};
