import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class LaunchService {
  private apiUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpService) {}

  getAllLaunches() {
    return this.http.get(`${this.apiUrl}/launches`);
  }

  getLaunchById(id: number) {
    return this.http.get(`${this.apiUrl}/launches/${id}`);
  }
}
