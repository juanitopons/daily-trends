import { Document } from 'mongoose';
import { DataFeed } from './datafeed';

/**
 * Interface for model IFeed
 *
 * @export
 * @interface IFeed
 */
export interface IFeed {
  _id;
  title: string;
  description: string;
  image;
  date;
  datafeed: DataFeed;
  deleted: boolean;
}

export class Feed extends Document implements IFeed {
  _id;
  title: string;
  description: string;
  image;
  date;
  datafeed: DataFeed;
  deleted: boolean;

  constructor(title?, description?, image?, date?, datafeed?, deleted?) {
    super();
    this.title = title;
    this.description = description;
    this.image = image;
    this.date = date;
    this.datafeed = datafeed;
    this.deleted = deleted;
  }

  public getDateAsString = function(): string {
    return this.date ? this.date.toDateString() : '';
  };
}
