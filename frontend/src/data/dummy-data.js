import { User } from '../modal/User';
import { Status } from '../modal/Status';

export const userData = [
    new User('1','john','eng','555-555-5555','john@gmail.com','bayside','big profit'),
    new User('2','harry','tang','555-555-5555','harry@gmail.com','bayside','big profit'),
    new User('3','sandy','wong','555-555-5555','sandy@gmail.com','bayside','big profit'),
    new User('4','wind','shield','555-555-5555','wind@gmail.com','bayside','big profit'),   
]

export const userStatus = [
    new Status('1','decline','1/2/13'),
    new Status('2','pending','1/2/13'),
    new Status('3','accepted','1/2/13'),
    new Status('4','pending','1/2/13'),
    new Status('5','decline','1/2/13'),
]