import { Document } from 'mongoose';

/**
 * Interface for model ConfigModel
 *
 * @export
 * @interface IConfig
 */
export interface IConfig {
  loaded: boolean;
}

export class Config extends Document implements IConfig {
  loaded: boolean;
  _id;

  constructor(loaded?) {
    super();
    this.loaded = loaded;
  }
}
