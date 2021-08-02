import axios from 'axios';

export default axios.create(
{
    baseUrl: 'http://api.unsplash.com',
    headers :{ Authorization : 'Client-ID JF8HQkA9SSJLRT-3hqipoq6H7OnryREUuuZ9-gpAKOI'}
});