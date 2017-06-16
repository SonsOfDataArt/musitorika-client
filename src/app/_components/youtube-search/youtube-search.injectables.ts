/**
 * Created by steve.smokov on 27.05.2017.
 */
import { YoutubeSearchService,
         YOUTUBE_API_KEY,
         YOUTUBE_API_URL } from './youtube-search.service';

export const YouTubeSearchInjectables: Array<any> = [
  {provide: YoutubeSearchService, useClass: YoutubeSearchService},
  {provide: YOUTUBE_API_KEY, useClass: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useClass: YOUTUBE_API_URL}
];
