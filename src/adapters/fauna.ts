import faunadb, { query as q } from "faunadb";

// @ts-expect-error
const client = new faunadb.Client({ secret: process.env.FAUNA_API_KEY });

const getAllVideos = async () => {
  try {
    const ret = await client.query(
        q.Map(
            q.Paginate(q.Match(q.Index("all_videos"))),
            q.Lambda("X", q.Get(q.Var("X"))),
        ),
    );
    // @ts-expect-error
    const final = [];
    // @ts-expect-error
    ret.data.forEach(
        // @ts-expect-error
        (V) => {
          final.push({ id: V.ref.id, collection: "videos", ...V.data });
        },
    );
    // @ts-expect-error
    return final;
  } catch (err) {
    return console.error(err);
  }
};

const getCategoryOfVideos = async () => {
  try {
    const ret = await client.query(
        q.Map(
            q.Paginate(q.Match(q.Index("all_videos"))),
            q.Lambda("X", q.Get(q.Var("X"))),
        ),
    );
    // @ts-expect-error
    const final = [];
    // @ts-expect-error
    ret.data.forEach(
        // @ts-expect-error
        (V) => {
          final.push({ id: V.ref.id, collection: "videos", ...V.data });
        },
    );
    // @ts-expect-error
    return final;
  } catch (err) {
    return console.error(err);
  }
};

// @ts-expect-error
const addSingleVideo = async (data) => {
  try {
    const ret = await client.query(
        q.Create(q.Collection("videos"), { data }),
    );
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

export { addSingleVideo, getAllVideos, getCategoryOfVideos, q };

export default client;

// https://github.com/NickFoden/flash-fauna/blob/master/src/api/fauna.js

// const addNewCollection = async newCollection => {
//     try {
//       const ret = await client.query(q.CreateCollection({ name: newCollection }));
//       return ret;
//     } catch (err) {
//       return console.error(err);
//     }
//   };

//   const addSingleRecord = async (collectionName:string, data) => {
//     try {
//       const ret = await client.query(
//         q.Create(q.Collection(collectionName), { data })
//       );
//       return ret;
//     } catch (err) {
//       return console.error(err);
//     }
//   };

//   const getSingleRecordByRef = async (collectionName, itemRef) => {
//     try {
//       const ret = await client.query(
//         q.Get(q.Ref(q.Collection(collectionName), itemRef))
//       );
//       return ret;
//     } catch (err) {
//       return console.error(err);
//     }
//   };

//   const deleteSingleRecordByRef = async (collectionName, itemRef) => {
//     try {
//       const ret = await client.query(
//         q.Delete(q.Ref(q.Collection(collectionName), itemRef))
//       );
//       console.log("Deleted: " + itemRef);
//       return ret;
//     } catch (err) {
//       return console.error(err);
//     }
//   };
