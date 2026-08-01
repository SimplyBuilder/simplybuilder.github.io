import { bootstrap } from './bootstrap.js';

const modInterface = Object.create(null);

/* inicia a aplicacao — ponto de entrada unico */
modInterface.start = (deps) => bootstrap.init(deps);

export const app = Object.freeze(modInterface);
