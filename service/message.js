/**
 * Created by bjj40 on 2017-06-20.
 */
var message = {};

message.buttons = ['교내식단', 'BTL식단', '하교광주권', '하교목포권', '기능추가요청'];

message.buttonsType = function(){
    return {
        type: 'buttons',
        buttons: message.buttons
    }
};

message.baseType = function(text){
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'buttons',
            buttons: message.buttons
        }
    }
};

message.photoType = function(text, url_photo, label, url_button){
    return {
        message: {
            text: text,
            photo: {
                url: url_photo,
                width: 640,
                height: 480
            },
            message_button: {
                label: label,
                url: url_button,
            }
        },
        keyboard: {
            type: 'buttons',
            buttons: message.buttons
        }
    }
};

message.messageButtonType = function(text, label, url_button){
    return {
        message: {
            text: text,
            message_button: {
                label: label,
                url: url_button,
            }
        },
        keyboard: {
            type: 'buttons',
            buttons: message.buttons
        }
    }
};

module.exports = message;