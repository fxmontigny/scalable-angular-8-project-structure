import UserMock from './user/user.mock';

export default class CheckMock {
  mockList = [new UserMock()];

  match(url, type, list) {
    for (let i = 0; i < list.length; i++) {
      const match = list[i];
      if (match.type === type && RegExp(match.regexUrl).test(url)) {
        return match.method(url);
      }
    }

    return null;
  }

  mock(url: string, type: string) {
    for (let i = 0; i < this.mockList.length; i++) {
      const m = this.match(url, type, this.mockList[i].matchingMethods);

      if (m) {
        return m;
      }
    }
  }
}
