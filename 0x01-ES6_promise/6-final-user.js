import signUpUser fron './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((values) => {
    const result = [];
      if (element.status === 'fulfilled') {
        result.push({ status: element.status, value: element.value });
      } else {
	result.push({ status: element.status, value: `${element.reason}` });
      }
  });
}  
