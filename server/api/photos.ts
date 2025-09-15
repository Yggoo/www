import { createApi } from 'unsplash-js'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { UNSPLASH_ACCESS_KEY } = useRuntimeConfig()
  
  // Check if access key is available
  if (!UNSPLASH_ACCESS_KEY) {
    console.warn('UNSPLASH_ACCESS_KEY not configured, using fallback image')
    // Return a placeholder image URL
    return 'https://picsum.photos/200/200?random=1'
  }
  
  try {
    const serverApi = createApi({
      accessKey: UNSPLASH_ACCESS_KEY
    })
    
    const output = await serverApi.photos.get({ photoId: query.id as string })
    
    if (output?.response?.urls?.full) {
      const width = query.w || '200'
      return `${output.response.urls.full}&w=${width}`
    } else {
      console.warn('Failed to fetch image from Unsplash, using fallback')
      return 'https://picsum.photos/200/200?random=2'
    }
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error)
    return 'https://picsum.photos/200/200?random=3'
  }
})
