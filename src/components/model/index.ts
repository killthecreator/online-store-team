import { Category, Brand, data, Data } from "./../../../data.js";

export class Model {
  constructor () {

  }

  public static cartState: number = 0;
  categories: Category[] = ["guitars", "basses", "drums", "keyboards", "microphones"];
  brands:  Brand[] = ["Novation", "Moog", "Korg", "Roland", "Yamaha", "DW", "Tama", "Ludwig", "Pearl", "Mapex", "Schecter", "Jackson", "Fender", "Gibson", "Ibanez", "B.C.Rich", "Epiphone", "AKG", "Shure", "Rode", "Sennheiser", "Neumann"];
  data: Data[] = data;

}
