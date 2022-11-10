const kue = require('kue');

const queue = kue.createQueue({redis: {
    port: 11331, host: 'redis-11331.c301.ap-south-1-1.ec2.cloud.redislabs.com' , auth: 'UiDe8qGDDL8tqdCBmPGS0PBAX0zzQBXQ'
}});

module.exports= queue;