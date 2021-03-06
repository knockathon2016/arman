'use strict';

var apputil = require('./util');

var type = {
    START_PLAY: 'start_play',
    GREETING: 'greeting',
    IMAGE: 'image',
    BUTTON: 'button',
    REPORTED_GARBAGE: 'report_garbage',
    TASK_COMPLETED: 'task_completed',
    CHALLENGE_LIST: 'challenge_list',
    STATS: 'stats',
    GAME_RULE: 'game_rule',
    CONFIRM_REPORT: 'confirm_report'
};

/* defining all reply message */
module.exports = function(messageType) {

    switch (messageType) {
        case type.START_PLAY:
            return 'Awesome :)\nCould you please share your location so that we can lookup nearby challenges.';

        case type.GREETING:
            return 'Welcome, Here you can participate in various cleanup challenges.This is an interactive game which will help you to clean your neighbourhood in all with some fun.You will be assigned a task at a time based on selected location.\n\nHapping Cleaning :)';

        case type.BUTTON:
            return [{
                type: "postback",
                title: "Task Completed",
                payload: "COMPLETED_TASK"
            }, {
                type: "postback",
                title: "Report Task",
                payload: "CONFIRM_REPORT"
            }];

        case type.REPORTED_GARBAGE:
            return 'Hmmm, can you share the snapshot of the place so that we can add it in our challenge list.';

        case type.TASK_COMPLETED:
            return 'Great!! That you have completed the task. We will let you know once verified.\nYou can also check all challennges around your area.';

        case type.STATS:
            return [{
                type: "web_url",
                url: "ttp://gocleanexzeoindia.com//",
                title: "Open Main website"
            }];

        case type.GAME_RULE:
            return "Awesome, now you need to complete the challenge in 48 hrs. to earn 10 points.\nWe will review it once you post the image of cleaned area.";

        case type.CONFIRM_REPORT:
            return "👾\nPhew!! you found some garbage. We need to clean it.\nThanks anyways for reporting.";

        default:
            return msgOptions.error[apputil.getRandomNumber(2)];

    }


};

var msgOptions = {

    error: [":(\nOkay, we could not understand this message", ":( As we are in beta, we might fail to understand some messages.\nBut yes we will learn from it"]

};