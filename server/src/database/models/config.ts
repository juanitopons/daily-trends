import { model, SchemaDefinition } from 'mongoose';
import { Model } from 'mongoose';
import { Config } from '../../interfaces/dto/config';
import { MasterSchemaOptions, MasterSchema } from './schema';

const ConfigDefiniton: SchemaDefinition = {
  loaded: {
    type: Boolean,
    default: false,
  },
  __v: {
    type: Number,
    select: false,
  },
};

// Schema
const configSchemaOptions = new MasterSchemaOptions<Config>(Config);
const ConfigSchema = new MasterSchema<Config>(
  ConfigDefiniton,
  configSchemaOptions,
);

// Model
const ConfigModel = model<Config>('Config', ConfigSchema) as Model<Config>;

export { ConfigModel, ConfigSchema };
