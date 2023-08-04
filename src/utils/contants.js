const GOOGLE_API_KEY="AIzaSyD-O_ImzoGALxxCCPYeXGtHYfbJAHSGHnU"
export const YOUTUBE_VIDEOS_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`

export const YOUTUBE_SEARCH_API="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

export const LIVE_CHAT_COUNT=10