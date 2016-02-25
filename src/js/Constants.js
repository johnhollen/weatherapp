import keyMirror from 'keymirror';

export default {
  CHANGE_EVENT: 'change',

  ActionTypes: keyMirror({
    WEATHER_DATA_FETCHED: null,
    FETCH_DATA_FAILED: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
