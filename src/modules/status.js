import { SchemaParser } from 'mongodb-schema-parser';

/**
 * The module action prefix.
 */
const PREFIX = 'schemaParserDemo';

/**
 * The toggle status action type.
 */
export const TOGGLE_STATUS = `${PREFIX}/TOGGLE_STATUS`;

/**
 * The initial state.
 */
export const INITIAL_STATE = 'enabled';

/**
 * Reducer function for handle state changes to status.
 *
 * @param {String} state - The status state.
 * @param {Object} action - The action.
 *
 * @returns {String} The new state.
 */
const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === TOGGLE_STATUS) {
    return toggledStatus(state);
  }
  return state;
};

function toggledStatus (state) {
  SchemaParser().then(module => {
    console.log("EXPORTS", module)

    // fetch('./fanclub.json')
    //   .then(response => response.text())
    //   .then(data => {
    //     var now = performance.now()
    //     var json = data.split("\n")
    //     for (var i = 0; i < json.length; i++) {
    //       if (json[i] !== '') {
    //         schemaParser.write(json[i])
    //       }
    //     }
    //     var state = schemaParser.toJson()
    //     console.log("time took", performance.now() - now)
    //     console.log(state)
    //   })
  })
  .catch(e => {
    console.log("Error loading wasm module", e)
  })

}

export default reducer;

/**
 * Action creator for toggle status events.
 *
 * @returns {Object} The toggle status action.
 */
export const toggleStatus = () => ({
  type: TOGGLE_STATUS
});
