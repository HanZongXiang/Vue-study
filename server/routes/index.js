var express = require('express');
var router = express.Router();

const users = [
  {
    username:'wangcai',
    password:123456
  },
  {
    username:'xiaoqiang',
    password:654321
  },
  {
      username:'aaa',
      password:123
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',(req,res)=>{
  const {username,password} = req.body
  console.log(username,password)
  let loginSuccess = false

  users.forEach(item => {
    // console.log(item)
    if(item.username == username && item.password == password){
        loginSuccess = true
    }
    })
    // console.log(loginSuccess)
    if(loginSuccess){
        res.json({
            code:200,
            msg:'登录成功'
        })
    }else{
       res.json({
           code:404,
           msg:'登录失败'
       })
    }
})

module.exports = router;
