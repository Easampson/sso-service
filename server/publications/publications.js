import { Meteor } from 'meteor/meteor';

Meteor.publish('userData', function() {
    if (this.userId) {
        return Meteor.users.find({ _id: Meteor._id()}, {_id: 1});
    } else {
        this.ready();
    }
});