import { createApi } from 'unsplash-js'
import { ApiResponse } from 'unsplash-js/dist/helpers/response'
import { Random } from 'unsplash-js/dist/methods/photos/types'

const accessKey = process.env.UNSPLASH_ACCESS_KEY == undefined ? '' : process.env.UNSPLASH_ACCESS_KEY

const serverApi = createApi({
  accessKey
})

const output = await serverApi.photos.getRandom({}) as ApiResponse<Random | Random[]>

export default defineEventHandler((event) => {
  return (output.response as Random).urls.small
})
