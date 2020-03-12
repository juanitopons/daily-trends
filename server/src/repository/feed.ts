// import { map } from 'lodash';
import { Feed } from '../interfaces/dto/feed';
import { FeedModel } from '../database/models/feed';

namespace FeedRepo {
  function getFilter(config) {
    const filter: { [key: string]: any } = {};
    if (config._id) {
      filter._id = config._id;
    }

    return filter;
  }

  export async function get(filter): Promise<Feed[]> {
    const feedQuery = FeedModel.find(getFilter(filter));
    if (filter.offset) {
      feedQuery.skip(filter.offset);
    }

    if (filter.limit) {
      feedQuery.limit(filter.limit);
    }

    const feed = await feedQuery.exec();
    return feed;
  }

  export async function getSingle(id): Promise<Feed> {
    if (!id) {
      throw Error;
    }

    return await FeedModel.findById(id);
  }

  export async function create(feedItem: Feed): Promise<Feed> {
    return await FeedModel.create(feedItem);
  }

  export async function edit(feedItem: Feed): Promise<Feed> {
    return await FeedModel.updateOne({ _id: feedItem._id }, feedItem, {
      upsert: true,
    });
  }

  // export async function deleteFeed(feedId: number): Promise<Feed> {
  //   return await FeedModel.deleteOne({ _id: feedId });
  // }
}

export default FeedRepo;
