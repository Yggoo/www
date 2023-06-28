import { createApi } from 'unsplash-js'
import { Random } from 'unsplash-js/dist/methods/photos/types'

export default defineEventHandler(async () => {
  const { UNSPLASH_ACCESS_KEY} = useRuntimeConfig()
  const serverApi = createApi({
    accessKey: UNSPLASH_ACCESS_KEY
  })
  const output = await serverApi.photos.get({ photoId: '3tkxfe2GocY'})
  return { 
    url: output.response?.urls.small,
    raw: output
  }
})
