import { getCategoryOfVideos, getAllVideos } from "../adapters/fauna";

const resolvers = {
  Query: {
    videos: async () => {
      const result = await getAllVideos();
      return result;
    },
    opinion: async () => {
      const result = await getCategoryOfVideos();
      return result;
    },
    diaryOfSong: async () => {
      const result = await getCategoryOfVideos();
      return result;
    },
    opDocs: async () => {
      const result = await getCategoryOfVideos();
      return result;
    },
  },
};
export default resolvers;
