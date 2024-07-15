import request from '@/utils/request'
export const userRegisterService = ({ username, password, repassWord }) => {
  request.post('/api/reg', { username, password, repassWord })
}
