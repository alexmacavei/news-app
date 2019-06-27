import { Article } from '../model/Article';

export class NewsService {
  private readonly apiKey = 'a2d100807c0348d6b731b261b1876f2b';

  getTopHeadlinesByCountry(countryCode: string): Promise<Article[] | never> {
    return fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${this.apiKey}`)
      .then(response => response.json())
      .then(results => results.articles as Article[]);
  }
}
