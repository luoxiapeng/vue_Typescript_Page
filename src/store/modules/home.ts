
/**
 * @author luoxiapeng
 * @lastTime 2019/12/4
 */
import * as ServiceApi from '@/api/modules/system'
import * as mutationsType from '@/store/mutationsType'
import {systemState} from '@/store/type'
const Home = {
  state: {
    Homelist:{}
  },
  mutations: {
    [mutationsType.GETHOMELIST](state:systemState,data:Object){
      state.Homelist=data
      // console.log(state,0)
    }
  },
  actions: {
    async getHomeList({commit}:any,info:Object={}){
      let responData = await ServiceApi.grtHomeList({},'/SmallVue/mock').then((res:any)=>{
         return res
      })
      commit(mutationsType.GETHOMELIST,await responData)
    }
    
  }
}

export default Home
