/* eslint-disable prettier/prettier */
import { model, SchemaDefinition } from 'mongoose';
import { Model } from 'mongoose';
import { DataFeed } from '../../interfaces/dto/datafeed';
import { MasterSchemaOptions, MasterSchema } from './schema';

const DataFeedDefinition: SchemaDefinition = {
  name: String,
  request: String,
  daily: {
    type: Boolean,
    default: true,
  },
  __v: {
    type: Number,
    select: false,
  },
};

// Schema
const datafeedSchemaOptions = new MasterSchemaOptions<DataFeed>(DataFeed);
const DataFeedSchema = new MasterSchema<DataFeed>(
  DataFeedDefinition,
  datafeedSchemaOptions,
);

// Model
const DataFeedModel = model<DataFeed>('Config', DataFeedSchema) as Model<DataFeed>;

export { DataFeedModel, DataFeedSchema };
