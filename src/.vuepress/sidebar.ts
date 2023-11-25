import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "向导",
      icon: "laptop-code",
      prefix: "in/",
      link: "/in",
      children: "structure",
    },
    {
      text: "UTAU经验分享",
      icon: "book",
      prefix: "utau/",
      link: "/utau/index",
      children: "structure",
    },
  ],
});