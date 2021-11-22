import api from "./api";

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

class UserService {
  public async getUsers(): Promise<IUser[]> {
    const response = await api.get("/users");
    return response.data;
  }
}

export default UserService;
