import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
const Pinia = createPinia().use(persist)
export default Pinia
export * from './modules/user'
export * from './modules/counter'
