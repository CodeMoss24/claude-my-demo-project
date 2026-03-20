// 修复后：添加参数校验、使用 let/const、格式化代码
function login(user, pwd) {
    // 参数校验
    if (!user || !pwd) {
        return { error: '参数不完整' };
    }

    // 密码应从环境变量或安全配置获取，禁止明文存储
    const storedPassword = process.env.USER_PASSWORD || '';

    if (user === 'admin' && pwd === storedPassword) {
        return true;
    }

    return false;
}
