var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/keyboard', function(req, res)  {
    const menu = {
        type: 'buttons',
        buttons: ['버튼1', '버튼2', '버튼3']
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(menu));
});

router.post('/message', function(req, res){
    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };
    console.log(_obj);

    var message = {
        "message": {
            "text": "응답 메세지..."
        },
        "keyboard": {
            "type": "buttons",
            "buttons": [
                "menu1",
                "menu2",
                "menu3"
            ]
        }
    };
});


module.exports = router;
