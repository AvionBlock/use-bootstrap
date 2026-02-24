import * as cheerio from "cheerio";
export default (function(nitroApp) {
  nitroApp.hooks.hook("render:response", (response, _context) => {
    const dom = cheerio.load(response.body);
    const target = dom("#__nuxt");
    response.body = target?.html();
  });
});
