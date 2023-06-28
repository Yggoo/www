import { createApi } from 'unsplash-js'
import { Random } from 'unsplash-js/dist/methods/photos/types'

export default defineEventHandler(async () => {
  const { UNSPLASH_ACCESS_KEY} = useRuntimeConfig()
  const serverApi = createApi({
    accessKey: UNSPLASH_ACCESS_KEY
  })
  const output = await serverApi.photos.getRandom({})
  return { 
    url: (output.response as Random).urls.small,
    raw: output
  }
})
