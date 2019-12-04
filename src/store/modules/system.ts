import * as ServiceApi from '@/api/modules/system'
import * as actionType from '@/store/actionType'
const system = {
  state: {
    list:[]
  },
  mutations: {
    [actionType.GETLIST](state:Object,info:Object){
      state.list=info
      console.log(state)
      console.log(info)
    }
   
  },
  actions: {
    async getList({commit,state}:any,info:Object){
      console.log(state)
      console.log(commit)
      console.log(info)
      commit(actionType.GETLIST,info)
      // let responDta =ServiceApi.getHome(info).then((res:any)=>{
        
      // })
      // commit(actionType.GETLIST,await responDta)
    }
    
  }
}

export default system
