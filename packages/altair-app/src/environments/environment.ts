// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import pkg from '../../package.json';
import { getClientConfig } from '@altairgraphql/firebase-utils';

export const environment = {
  production: false,
  version: pkg.version,
  serverReady: true,
  firebaseConfig: getClientConfig(),
};
