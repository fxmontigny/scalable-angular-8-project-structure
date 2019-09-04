// import json from './user.json';

export default class UserMock {
  public matchingMethods = [
    { type: 'post', regexUrl: '^users$', method: this.getUser }
  ];

  getUser(url) {
    return new Promise((resolve, reject) => {
      resolve('coucou');
    });
  }
}
