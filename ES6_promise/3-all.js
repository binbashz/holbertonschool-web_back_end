import { uploadPhoto, createUser } from './utils.js';
import handleProfileSignup from './3-all.js';

handleProfileSignup()
  .then((result) => {
	      console.log(result.body.firstName, result.body.lastName);
	    })
  .catch((error) => {
	      console.error('Signup system offline');
	    });
