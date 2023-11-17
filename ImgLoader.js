export default function myImageLoader({ src, width, quality }) {
  return `http://18.208.174.187:4000/${src}?w=${width}&q=${quality || 75}`
}