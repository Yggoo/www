import { createApi } from 'unsplash-js'
import { ApiResponse } from 'unsplash-js/dist/helpers/response'
import { Random } from 'unsplash-js/dist/methods/photos/types'
/*
const accessKey = process.env.UNSPLASH_ACCESS_KEY == undefined ? '' : process.env.UNSPLASH_ACCESS_KEY

const serverApi = createApi({
  accessKey
})
*/



export default defineEventHandler(async (event) => {
  const serverApi = createApi({
    accessKey: useRuntimeConfig().UNSPLASH_ACCESS_KEY
  })
  const output = await serverApi.photos.getRandom({}) as ApiResponse<Random | Random[]>
  return (output.response as Random).urls.small
})
