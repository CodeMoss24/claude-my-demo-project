// 修复后：添加参数校验、使用 let/const、格式化代码
function login(user, pwd) {
    // 参数校验
    if (!user || !pwd) {
        return { error: '参数不完整' };
    }

    // 密码应从安全存储获取，此处为示例
    const storedPassword = '123456';

    if (user === 'admin' && pwd === storedPassword) {
        return true;
    }

    return false;
}
