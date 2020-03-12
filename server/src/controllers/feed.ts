import feedRepo from '../repository/feed';
import { Feed } from '../interfaces/dto/feed';

namespace FeedCtrl {
  export async function get(req, res, next) {
    const feed: Feed[] = (await feedRepo.get(req.query)) as Feed[];
    res.send(feed);
  }

  export async function create(req, res, next) {
    const feedItem = req.body.data;
    if (!feedItem || feedItem._id) {
      throw new Error();
    }

    const createdFeed: Feed[] = [(await feedRepo.create(feedItem)) as Feed];
    res.send(createdFeed);
  }

  export async function edit(req, res, next) {
    const feedId = req.params.id;
    const feedItem = req.body.data;
    if (!feedItem || !feedId) {
      throw new Error();
    }

    const editedFeed: Feed[] = [(await feedRepo.edit(feedItem)) as Feed];
    res.send(editedFeed);
  }

  // export async function deleteFeed(req, res, next) {
  //   const feedItemId = req.params.id;
  //   if (!feedItemId) {
  //     throw new Error;
  //   }

  //   let deletedFeed = [await feedRepo.deleteFeed(feedItemId)];
  //   res.send(deletedFeed);
  // };
}

export default FeedCtrl;
