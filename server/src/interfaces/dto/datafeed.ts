import { Document } from 'mongoose';
/**
 * Interface for model DataFeedModel
 *
 * @export
 * @interface IDataFeed
 */
export interface IDataFeed {
  _id;
  name: string;
  request: string;
  daily: boolean;
}

export class DataFeed extends Document implements IDataFeed {
  _id;
  name: string;
  request: string;
  daily: boolean;

  constructor(name?, request?, daily?) {
    super();
    this.name = name;
    this.request = request;
    this.daily = daily;
  }

  public getDateAsString = function() {
    return this.date ? this.date.toDateString() : '';
  };
}
