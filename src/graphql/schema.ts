import gql from "graphql-tag";

const typeDefs = gql`
  type PromoPhoto {
    credit: String
    url: String
  }

  type Video {
    type: String
    url: String
  }

  type NYTVideo {
    category: String
    cursor: String
    byline:String
    headline: String
    promotionalMedia: PromoPhoto
    summary: String
    tags: [String]
    video: Video
  }

  type Query {
    videos: [NYTVideo]
    opinion: [NYTVideo]
    diaryOfSong:[NYTVideo]
    opDocs:[NYTVideo]
  }
`;

export default typeDefs;
