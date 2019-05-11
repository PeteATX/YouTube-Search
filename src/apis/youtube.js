import axios from 'axios';
const KEY = 'AIzaSyDrbTquWlIhHfx_bHyPbh1xdLm4XMv5_jc';
export default axios.create ({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: { 
			part: 'snippet',
			maxResults: 5,
		key: KEY,
		
	}
});