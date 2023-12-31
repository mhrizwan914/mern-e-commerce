// Create Token Send Handle
const sendTokenHandle = (user, status, response) => {
    const token = user.generateAccessToken();
    const options = {
        expires: new Date(Date.now() + process.env.COOKIES_EXPIRE_TIME * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };
    response.status(status).cookie("token", token, options).json({
        success: true,
        token
    });
}
// Export
module.exports = sendTokenHandle;