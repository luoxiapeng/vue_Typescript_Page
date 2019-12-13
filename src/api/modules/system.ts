
/**
 * @author luoxiapeng
 * @lastTime 2019/12/2
 */
import request from '@/config/Require'

// export function getHome(params:Object):any{
//   return request.get({
//     reqMethod: 'sys.ViewResourceService.menuTree',
//     params
//   })
//  }

 export function getHomeList(params:Object={},url?:any):any{
  return request.get({
    params
  },url)
 }

 //获取静态数据，本地缓存

 export function getHomeJsonData(params:Object={},url?:any):any{
  return request.get({
    params
  },url)
 }