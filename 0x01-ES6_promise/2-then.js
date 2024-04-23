/* eslint-disable no-console */

import getFullResponseAPI from "./1-promise.js";

const responsePromise = getFullResponseAPI(true);

responsePromise
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error.message);
  });
