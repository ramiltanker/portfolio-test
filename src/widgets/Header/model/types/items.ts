import { RoutePath } from "shared/config/routeConfig/routeConfig";
import GitHubLight from "shared/assets/icons/GitHubLight.svg";
import GitHubDark from "shared/assets/icons/GitHubDark.svg";
import InstagramLight from "shared/assets/icons/InstagramLight.svg";
import InstagramDark from "shared/assets/icons/InstagramDark.svg";

export interface NavigationItemType {
  path: string;
  text: string;
}

export interface SocialNetworkItem {
  IconLight: React.VFC<React.SVGProps<SVGSVGElement>>;
  IconDark: React.VFC<React.SVGProps<SVGSVGElement>>;
  href: string;
}

export const NavigationItemsList: NavigationItemType[] = [
  {
    path: RoutePath.about,
    text: "Про меня",
  },
  {
    path: RoutePath.portfolio,
    text: "Портфолио",
  },
  {
    path: RoutePath.blog,
    text: "Блог",
  },
];

export const SocialNetworksList: SocialNetworkItem[] = [
  {
    IconLight: GitHubLight,
    IconDark: GitHubDark,
    href: "https://github.com/ramiltanker",
  },
  {
    IconLight: InstagramLight,
    IconDark: InstagramDark,
    href: "https://instagram.com/ashrafulin_?igshid=YmMyMTA2M2Y=",
  },
];
