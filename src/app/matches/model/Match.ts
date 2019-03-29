import {PlayerInMatch} from './PlayerInMatch';

export class Match {
  id: string;
  status: string;
  players: PlayerInMatch[];
  createdDate: Date;
  updatedDate: Date;
}
