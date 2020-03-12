import { model, SchemaDefinition, Schema } from 'mongoose';
import { Model } from 'mongoose';
import { Feed } from '../../interfaces/dto/feed';
import { MasterSchemaOptions } from './schema';
import { MasterSchema } from './schema';

const FeedDefinition: SchemaDefinition = {
  title: String,
  description: String,
  date: {
    type: Date,
  },
  datafeed: {
    type: Schema.Types.ObjectId,
    ref: 'DataFeed',
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  __v: {
    type: Number,
    select: false,
  },
};

// Schema
const feedSchemaOptions = new MasterSchemaOptions<Feed>(Feed);
const FeedSchema = new MasterSchema<Feed>(FeedDefinition, feedSchemaOptions);

// Model
const FeedModel = model<Feed>('Feed', FeedSchema) as Model<Feed>;

export { FeedModel, FeedSchema };
