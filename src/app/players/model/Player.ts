export class Player {
  id: string;
  name: string;
  status: string;
  region: string;
  createdDate: Date;
  updatedDate: Date;

  constructor(id: string, name: string, status: string, region: string, createdDate: Date, updatedDate: Date) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.region = region;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
  }
}
