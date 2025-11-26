import type { SocialLink } from "../types/social";

export const socials: SocialLink[] = [
  {
    id: "github",
    platform: "GitHub",
    url: "https://github.com/packed7Ice",
    username: "packed7Ice",
    description: "ソースコードリポジトリ",
  },
  {
    id: "twitter",
    platform: "Twitter",
    url: "https://x.com/YorikawaAise",
    username: "@YorikawaAise",
    description: "たまにいます",
  },
  {
    id: "discord",
    platform: "Discord",
    url: undefined, // URL遷移を無効化
    username: "@yorikawaaise",
    description: "メインの連絡先です",
  }
];
