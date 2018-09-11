var express = require('express');
var router = express.Router();

users = [
  {
    username:'wangcai',
    password:123456
  },
  {
    username:'xiaoqiang',
    password:654321
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',(req,res)=>{
  const {username,password} = req.body
  let loginSuccess = false

  users.forEach(item => {
    if(item.username === username && item.password ===password){
      loginSuccess = true
    }
    if(loginSuccess){
      res.json({
        code:200,
        msg:'登录成功'
      })
    }else{
      alert('登录失败')
    }
  })
})

module.exports = router;
