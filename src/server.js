import { Model, createServer } from "miragejs";
import toy_1 from "./Assets/Images/toys/toy_1.png";
import toy_3 from "./Assets/Images/toys/toy_3.png";
import toy_5 from "./Assets/Images/toys/toy_5.png";
import toy_8 from "./Assets/Images/toys/toy_8.png";
import toy_9 from "./Assets/Images/toys/toy_9.png";
import toy_11 from "./Assets/Images/toys/toy_11.png";
import toy_14 from "./Assets/Images/toys/toy_14.png";
import toy_16 from "./Assets/Images/toys/toy_16.png";

import toy_2 from "./Assets/Images/toys/toy_2.png";
import toy_4 from "./Assets/Images/toys/toy_4.png";
import toy_6 from "./Assets/Images/toys/toy_6.png";
import toy_7 from "./Assets/Images/toys/toy_7.png";
import toy_10 from "./Assets/Images/toys/toy_10.png";
import toy_12 from "./Assets/Images/toys/toy_12.png";
import toy_13 from "./Assets/Images/toys/toy_13.png";
import toy_15 from "./Assets/Images/toys/toy_15.png";

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
      urlImg: toy_1,
      type: "stuffed",
    });
    server.create("product", {
      id: 2,
      name: "Mega Plush Toy",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "38.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_3,
      type: "stuffed",
    });
    server.create("product", {
      id: 3,
      name: "Cute Dog",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "24.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_5,
      type: "stuffed",
    });
    server.create("product", {
      id: 4,
      name: "little friend",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "24.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_8,
      type: "stuffed",
    });
    server.create("product", {
      id: 5,
      name: "Christmas Deer",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "29.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_9,
      type: "stuffed",
    });
    server.create("product", {
      id: 6,
      name: "Pluto Yellow Dog",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "32.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_11,
      type: "stuffed",
    });
    server.create("product", {
      id: 7,
      name: "grey Elephant",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "21.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_14,
      type: "stuffed",
    });
    server.create("product", {
      id: 8,
      name: "Funny clown",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "36.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_16,
      type: "stuffed",
    });

    server.create("product", {
      id: 9,
      name: "Happy Flower",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "30.00",
      width: 38,
      height: 32,
      length: 21.5,
      weight: 24,
      urlImg: toy_2,
      type: "wooden",
    });
    server.create("product", {
      id: 10,
      name: "lift machine",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "41.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_4,
      type: "wooden",
    });
    server.create("product", {
      id: 11,
      name: "Wooden Camera",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "24.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_6,
      type: "wooden",
    });
    server.create("product", {
      id: 12,
      name: "little Rabbit",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "24.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_7,
      type: "wooden",
    });
    server.create("product", {
      id: 13,
      name: "rainbow truck",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "29.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_10,
      type: "wooden",
    });
    server.create("product", {
      id: 14,
      name: "happy dog",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "32.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_12,
      type: "wooden",
    });
    server.create("product", {
      id: 15,
      name: "caterpillar",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "21.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_13,
      type: "wooden",
    });
    server.create("product", {
      id: 16,
      name: "wooden tractor",
      content:
        "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.",
      describe:
        "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!",
      price: "36.00",
      width: 12.5,
      height: 6,
      length: 3,
      weight: 32,
      urlImg: toy_15,
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
