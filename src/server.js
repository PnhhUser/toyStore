import { Model, createServer } from "miragejs";

createServer({
  models: {
    product: Model,
  },
  seeds(server) {
    server.create("product", {
      id: 1,
      name: "Teddy Bear",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "30.00",
      width: 38,
      height: 32,
      length: 21.5,
      weight: 24,
      urlImg: "toy_1",
      type: "stuffed",
    });
    server.create("product", {
      id: 2,
      name: "Happy Flower",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "38.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: "toy_2",
      type: "wooden",
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/product", (schema) => {
      return schema.products.all();
    });
  },
});
