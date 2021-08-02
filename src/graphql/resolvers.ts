import { getAllVideos } from "../adapters/fauna";

const resolvers = {
  Query: {
    videos: async () => {
      const result = await getAllVideos();
      return result;
    },
  },
};
export default resolvers;
