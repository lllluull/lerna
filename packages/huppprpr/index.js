const { API } = require('huppprprcore');
const axios = require('axios');

const getPopularImg = () => axios.get(API)

module.exports = getPopularImg;

// 测试代码，                 

// getPopularImg().then((res) => console.log(res.data.length));