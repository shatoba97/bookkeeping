import { CardModel } from './card.model';

/** Base user model */
export interface UserModel {
  name: string;
  secondName: string;
  birthDay: string;
  token: string;
  cards: CardModel[];
}
