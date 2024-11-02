import { namesUser, comments } from './constants.mjs';
import { getRandomInt } from './util.mjs';

const useNumbersImg = [];
const useID = [];

export function generateComment() {
  const commentPersons = [];
  for (let i = 1; i <= getRandomInt(1, 30); i++) {
    let newID;
    do {
      newID = getRandomInt(1, 12345);
    } while (useID.includes(newID));
    useID.push(newID);
    const commentPerson = [];
    for (let j = 1; j <= getRandomInt(1, 2); j++) {
      commentPerson.push(comments[getRandomInt(0, comments.length - 1)]);
    }
    commentPersons.push({
      id: newID,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: commentPerson.join(' '),
      name: namesUser[getRandomInt(0, namesUser.length - 1)],
    });
  }
  return commentPersons;
}

export function generatePhotos() {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    let randomNumberImage;
    do {
      randomNumberImage = getRandomInt(1, 25);
    } while (useNumbersImg.includes(randomNumberImage));
    useNumbersImg.push(randomNumberImage);
    const photo = {
      id: i,
      url: `photos/${randomNumberImage}.jpg`,
      description: `Описание фотографии ${i}`,
      likes: getRandomInt(15, 200),
      comments: generateComment(),
    };
    photos.push(photo);
  }
  return photos;
}