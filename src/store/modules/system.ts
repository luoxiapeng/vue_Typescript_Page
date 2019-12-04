
/**
 * @author luoxiapeng
 * @lastTime 2019/12/4
 */
import * as ServiceApi from '@/api/modules/system'
import * as mutationsType from '@/store/mutationsType'
import {systemState} from '@/store/type'
const system = {
  state: {
    list:{}
  },
  mutations: {
    [mutationsType.GETLIST](state:systemState,info:Object){
      state.list=info
      console.log(state.list,0)
    }
    
   
  },
  actions: {
    async getList({commit,state}:any,info:Object){
      commit(mutationsType.GETLIST,info)
      // let responDta =ServiceApi.getHome(info).then((res:any)=>{
        
      // })
      // commit(mutationsType.GETLIST,await responDta)
    }
    
  }
}

export default system
