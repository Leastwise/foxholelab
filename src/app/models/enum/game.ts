import { SelectItem } from 'primeng/api';

export enum Game {
  None = 'None',
  Factorio = 'Factorio',
  CaptainOfIndustry = 'CaptainOfIndustry',
  DysonSphereProgram = 'DysonSphereProgram',
  Satisfactory = 'Satisfactory',
  Foxhole = 'Foxhole',
}

export const games = [
  Game.Factorio,
  Game.DysonSphereProgram,
  Game.Satisfactory,
  Game.Foxhole,
  Game.CaptainOfIndustry,
];

export const gameOptions: SelectItem<Game>[] = [
  { value: Game.Factorio, label: 'options.game.factorio' },
  { value: Game.DysonSphereProgram, label: 'options.game.dysonSphereProgram' },
  { value: Game.Satisfactory, label: 'options.game.satisfactory' },
  { value: Game.Foxhole, label: 'options.game.foxhole' },
  { value: Game.CaptainOfIndustry, label: 'options.game.captainOfIndustry' },
];
