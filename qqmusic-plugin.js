export default {
  platform: "qqmusic",
  version: "1.0.0",
  author: "SHIN",
  homepage: "https://github.com/shenxin1106/musicfree-qqmusic-plugin",
  search: async (query, type) => {
    const res = await fetch(
      `https://api.i-meto.com/meting/api/?server=tencent&type=search&format=json&keyword=${encodeURIComponent(
        query
      )}`
    );
    const data = await res.json();

    return data.map((item) => ({
      id: item.url,
      name: item.name,
      artist: item.artist,
      album: item.album,
      duration: Number(item.duration) * 1000,
      platform: "qqmusic",
      sourceUrl: item.url,
      artwork: item.pic,
    }));
  },
  getMediaSource: async (songId) => {
    return {
      url: songId,
      quality: "standard",
    };
  },
};
