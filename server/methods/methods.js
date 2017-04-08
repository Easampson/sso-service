Meteor.methods({

    'postFill'(){
        var slackParam = {
            type: 'POST',
            redirect_url: 'https://mistiqtech.slack.com/messages',
            team: '', // mistiqtech team ID
            scope: '', // permissions to data and services
            client_id: '', // issued when the app is registered
            state: '' //
        }


    }



});