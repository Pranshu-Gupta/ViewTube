import axios from 'axios';

const KEY = 'AIzaSyAJWAD7JUJfq84u30kt8RhDVm54C35gnWU';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: 5,
    part: 'snippet',

    key: KEY,
  },
});
