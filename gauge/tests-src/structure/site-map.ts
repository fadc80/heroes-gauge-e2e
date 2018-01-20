import { PageObject } from './page-objects/page-object';

export class SiteMap {
  private static _instance = null;
  pages: { [nome: string]: PageObject } = {};

  public static baseUrl: string = process.env.applicationAddress;

  getUrl(nomePagina: string) {
    if (this.pages[nomePagina]) {
      return SiteMap.baseUrl + (this.pages[nomePagina].path || '/');
    } else {
      throw `PageObject não encontrado com o nome '${nomePagina}'!`;
    }
  }

  getPageObject<T>(nomePagina: string): T {
    if (this.pages[nomePagina]) {
      return <any>this.pages[nomePagina];
    } else {
      throw `PageObject não encontrado com o nome '${nomePagina}'!`;
    }
  }

  static get instance(): SiteMap {
    if (!SiteMap._instance) {
      SiteMap._instance = new SiteMap();
    }
    return SiteMap._instance;
  }

}
