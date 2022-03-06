//用户登录
let login = (params = {}) => uni.$u.post('/login/wx', params);
export default {
	login,
}
