var express = require('express');
var router = express.Router();
//추가
var message = require('../service/message');
var CronService = require('../service/CronService');
var Bot = require('../service/BotService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/keyboard', function(req, res)  {
    // const menu = {
    //     type: "buttons",
    //     buttons: ["버튼1", "버튼2", "버튼3"]
    // };
    res.set({'Content-Type':'application/json'
    }).send(JSON.stringify(message.buttonsType()));
});

router.post('/message', function(req, res){
    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };
    console.log(_obj);

    // var message = {
    //     "message": {
    //         "text": "응답 메세지..."
    //     },
    //     "keyboard": {
    //         "type": "buttons",
    //         "buttons": [
    //             "menu1",
    //             "menu2",
    //             "menu3"
    //         ]
    //     }
    // };
    //
    // res.set({'Content-Type':'application/json'
    // }).send(JSON.stringify(message));
    Bot.choseMenu(req, _obj.content, function(err, result){
        if (!err) {
        res.set({
            'content-type': 'application/json'
        }).send(JSON.stringify(result));
    } else {
        res.set({
            'content-type': 'application/json'
        }).send(JSON.stringify(message.baseType('다시 시도해주세요')));
    }
});
});
//
// router.post('/friend', checkUserKey, function(req, res){
//     const user_key = req.body.user_key;
// console.log("${user_key}님이 쳇팅방에 참가했습니다.");
//
// res.set({
//     'content-type': 'application/json'
// }).send(JSON.stringify({success: true}));
// });
//
// router.delete('/friend', checkUserKey, function(req, res){
//     const user_key = req.body.user_key;
// console.log("${user_key}님이 쳇팅방을 차단했습니다.");
//
// res.set({
//     'content-type': 'application/json'
// }).send(JSON.stringify({success: true}));
// });
//
// router.delete('/chat_room/:user_key', checkUserKey, function(req, res){
//     const user_key = req.params.user_key;
// console.log("${user_key}님이 쳇팅방에서 나갔습니다.");
//
// res.set({
//     'content-type': 'application/json'
// }).send(JSON.stringify({success: true}));
// });
//

module.exports = router;
