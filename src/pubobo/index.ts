const str = ['hoge', 'fuga', 'piyo'];
const hoge = ['わたしは', 'この世界を', '！！！！！', '、', '暗黒面に', 'ラーメン食べたい', 'ほげえええええ', 'ぷっっちょ'];
const fuga = ['ポ', '！', 'ィ', 'ー', 'ヴェ', 'ピ', 'ブ', 'ォ', 'ガ', 'ン', 'ン'];

const pubobo = (strArr: string[], num: number): string => {
  let message = '';
  for(let i = 0; i < num; i++) {
    message += strArr[getRandomNum(strArr.length)];
  }
  return message;
};

const getRandomNum = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};

console.log(pubobo(str, 10));
console.log(pubobo(hoge, hoge.length));
console.log(pubobo(fuga, 30));