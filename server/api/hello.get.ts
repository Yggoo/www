import { createApi } from 'unsplash-js'
import { Random } from 'unsplash-js/dist/methods/photos/types'

export default defineEventHandler(async () => {
  const serverApi = createApi({
    accessKey: useRuntimeConfig().UNSPLASH_ACCESS_KEY
  })
  const output = await serverApi.photos.getRandom({})
  return (output.response as Random).urls.small
})
