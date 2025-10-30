import React, { useEffect, useState } from "react"

export default function Youtube() {
  const api = "AIzaSyBiL-PLLuxCoOX84zA3j_MftrHc2_f4Pdc"
  const channelId = "UCsL7XiEHP5hh91sgf-T92jA"

  const [channel, setChannel] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const getChannel = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=${api}`)
        const data = await res.json()
        if (data.items && data.items.length > 0) {
          setChannel(data.items[0])
        }
      } catch (e) {
        console.log(e)
      }
    }
    getChannel()
  }, [])

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${api}&channelId=${channelId}&part=snippet,id&order=date&maxResults=9`)
        const data = await res.json()
        const ids = data.items?.map(v => v.id.videoId).filter(Boolean).join(",")
        if (!ids) return
        const res2 = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${ids}&key=${api}`)
        const data2 = await res2.json()
        setVideos(data2.items || [])
      } catch (e) {
        console.log(e)
      }
    }
    getVideos()
  }, [])

  if (!channel) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-gray-400 text-lg">
        Loading channel details...
      </div>
    )
  }

  const { snippet, statistics, brandingSettings } = channel

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#141426] to-[#1b1b38] text-white px-6 py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-64 w-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-10 right-10 h-80 w-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {brandingSettings?.image?.bannerExternalUrl && (
          <img
            src={brandingSettings.image.bannerExternalUrl}
            alt="banner"
            className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg"
          />
        )}

        <div className="flex flex-col items-center -mt-16">
          <img
            src={snippet?.thumbnails?.high?.url}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.6)]"
          />
          <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(251,146,60,0.6)]">
            {snippet?.title}
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-2">{snippet?.description}</p>

          <div className="flex flex-wrap justify-center gap-6 mt-4 text-gray-300 font-medium">
            <span>👥 {Number(statistics.subscriberCount).toLocaleString()} Subs</span>
            <span>👀 {Number(statistics.viewCount).toLocaleString()} Views</span>
            <span>🎥 {statistics.videoCount} Videos</span>
          </div>

          <a
            href={`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-yellow-400 text-black font-semibold shadow-[0_0_20px_rgba(251,146,60,0.4)] transition-all hover:scale-105"
          >
            ❤️ Subscribe
          </a>
        </div>

        <h3 className="text-2xl font-semibold mt-12 mb-6 text-center text-white/90">
          🎬 Latest Videos
        </h3>

        {videos.length === 0 ? (
          <p className="text-center text-gray-400">No videos yet, they’ll appear here after upload 🎥</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map(v => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-lg hover:shadow-[0_0_20px_rgba(251,146,60,0.3)] transition-all hover:scale-105"
              >
                <img
                  src={v.snippet?.thumbnails?.high?.url}
                  alt={v.snippet?.title}
                  className="rounded-xl w-full h-44 object-cover group-hover:opacity-90 transition"
                />
                <h4 className="mt-3 font-semibold text-sm text-gray-100 line-clamp-2 group-hover:text-orange-300">
                  {v.snippet?.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  📅 {new Date(v.snippet?.publishedAt).toLocaleDateString("en-IN")}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
