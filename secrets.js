// Example of provider configs supported by SimpleAuth.

module.exports = {
    google: {
        appId: '536279923900-3m19sfefqf26jgiuam32q1cofejfmqf9.apps.googleusercontent.com',
        callback: 'com.reactnativesimpleauth:/oauth2redirect',
    },
    facebook: {
        appId: '1234567890',
        callback: 'fb1234567890://authorize',
    },
    twitter: {
        appId: '1234567890abc',
        appSecret: '1234567890abc',
        callback: 'reactnativesimpleauth://authorize',
    },
    tumblr: {
        appId: '1234567890abc',
        appSecret: '1234567890abc',
        callback: 'reactnativesimpleauth://authorize',
    },
};
