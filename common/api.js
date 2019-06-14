/****************************   请求    ************************************* */
const superagent = require('superagent')
function request(url,method, params, data, cookies) {
  return new Promise(function (resolve,reject) {
	superagent(method, url)
		.query(params)
		.send(data)
		.set('Content-Type','application/x-www-form-urlencoded')
		.end(function (err, response) {
		  if (err) {
			  reject(err)
		  }
		  resolve(response)
		})
  })
}
/**************************************************************************** */

// api: 获取机器人回复
async function getAnswer(word) {
  let url = 'http://api.qingyunke.com/api.php' // 青云api，智能聊天机器人
  let res = await request(url,'GET',{appid: 0, key: 'free', msg: encodeURI(word)})
  let content = JSON.parse(res.text)
  console.log(content)
  if(content.result === 0){
    return content.content.replace(/{br}/g, '<br>')
  }else {
    return '我好像迷路了，你能找回我么'
  }
}

module.exports ={
  getAnswer
}
