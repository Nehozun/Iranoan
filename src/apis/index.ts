import axios from "axios";

export async function sendContact(content: any) {
    return axios.post('http://153.126.211.218:3128/rest/mailservice/send', content, {
      headers: {
        'Content-Type': `application/json`,
      },
    });
  }