import axios from 'axios';

const  KEY='AIzaSyAebuFcysefbYkJ11agg8Wdmk4YnW0FHS0'


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }

});
