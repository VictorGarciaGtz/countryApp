export interface Country {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc?:        string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    string;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currencies {
  BAM?: BAM;
  CDF?: BSD;
  EUR?: BSD;
  USD?: BSD;
  PLN?: BSD;
  CRC?: BSD;
  XOF?: BSD;
  XCD?: BSD;
  STN?: BSD;
  ZMW?: BSD;
  EGP?: BSD;
  ILS?: BSD;
  JOD?: BSD;
  YER?: BSD;
  BSD?: BSD;
  GBP?: BSD;
  JEP?: BSD;
  DOP?: BSD;
  CLP?: BSD;
}

export interface BAM {
  name: string;
}

export interface BSD {
  name:   string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  bos?: string;
  hrv?: string;
  srp?: string;
  fra?: string;
  kon?: string;
  lin?: string;
  lua?: string;
  swa?: string;
  ita?: string;
  cal?: string;
  cha?: string;
  eng?: string;
  pol?: string;
  spa?: string;
  por?: string;
  pov?: string;
  ara?: string;
  heb?: string;
  nrf?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}
