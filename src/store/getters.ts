import { GetterTree } from 'vuex'

const getters: GetterTree<RootState, RootState> = {
  sidebar: (state) => state.app.sidebar
}
export default getters
