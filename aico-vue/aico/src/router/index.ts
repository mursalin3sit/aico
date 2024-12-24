import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AIImageGeneratorPage from "../pages/AIImageGeneratorPage.vue";
import AIChatbotPage from "../pages/AIChatbotPage.vue";
import AIChatbotDarkPage from "../pages/AIChatbotDarkPage.vue";
import AINewsPage from "../pages/AINewsPage.vue";
import AINewsDarkPage from "../pages/AINewsDarkPage.vue";
import AIGeneratePage from "../pages/AIGeneratePage.vue";
import AboutUsPage from "../pages/AboutUsPage.vue";
import TeamPage from "../pages/TeamPage.vue";
import ServicesPage from "../pages/ServicesPage.vue";
import ServiceDetailsPage from "../pages/ServiceDetailsPage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";
import FAQPage from "../pages/FAQPage.vue";
import MyAccountPage from "../pages/MyAccountPage.vue";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage.vue";
import TermsConditionsPage from "../pages/TermsConditionsPage.vue";
import ComingSoonPage from "../pages/ComingSoonPage.vue";
import PricingPage from "../pages/PricingPage.vue";
import BlogGridPage from "../pages/BlogGridPage.vue";
import BlogRightSidebarPage from "../pages/BlogRightSidebarPage.vue";
import BlogDetailsPage from "../pages/BlogDetailsPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ShopPage from "../pages/ShopPage.vue";
import ProductDetailsPage from "../pages/ProductDetailsPage.vue";
import CartPage from "../pages/CartPage.vue";
import CheckoutPage from "../pages/CheckoutPage.vue";
import WishlistPage from "../pages/WishlistPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "AIImageGeneratorPage",
    component: AIImageGeneratorPage,
  },
  {
    path: "/ai-chatbot",
    name: "AIChatbotPage",
    component: AIChatbotPage,
  },
  {
    path: "/ai-chatbot-dark",
    name: "AIChatbotDarkPage",
    component: AIChatbotDarkPage,
  },
  {
    path: "/ai-news",
    name: "AINewsPage",
    component: AINewsPage,
  },
  {
    path: "/ai-news-dark",
    name: "AINewsDarkPage",
    component: AINewsDarkPage,
  },
  {
    path: "/ai-generator",
    name: "AIGeneratePage",
    component: AIGeneratePage,
  },
  {
    path: "/about",
    name: "AboutUsPage",
    component: AboutUsPage,
  },
  {
    path: "/team",
    name: "TeamPage",
    component: TeamPage,
  },
  {
    path: "/services",
    name: "ServicesPage",
    component: ServicesPage,
  },
  {
    path: "/service-details",
    name: "ServiceDetailsPage",
    component: ServiceDetailsPage,
  },
  {
    path: "/portfolio",
    name: "PortfolioPage",
    component: PortfolioPage,
  },
  {
    path: "/faq",
    name: "FAQPage",
    component: FAQPage,
  },
  {
    path: "/profile-authentication",
    name: "MyAccountPage",
    component: MyAccountPage,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicyPage",
    component: PrivacyPolicyPage,
  },
  {
    path: "/terms-conditions",
    name: "TermsConditionsPage",
    component: TermsConditionsPage,
  },
  {
    path: "/coming-soon",
    name: "ComingSoonPage",
    component: ComingSoonPage,
  },
  {
    path: "/pricing",
    name: "PricingPage",
    component: PricingPage,
  },
  {
    path: "/blog-grid",
    name: "BlogGridPage",
    component: BlogGridPage,
  },
  {
    path: "/blog-right-sidebar",
    name: "BlogRightSidebarPage",
    component: BlogRightSidebarPage,
  },
  {
    path: "/blog-details",
    name: "BlogDetailsPage",
    component: BlogDetailsPage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/shop",
    name: "ShopPage",
    component: ShopPage,
  },
  {
    path: "/product-details",
    name: "ProductDetailsPage",
    component: ProductDetailsPage,
  },
  {
    path: "/cart",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "/checkout",
    name: "CheckoutPage",
    component: CheckoutPage,
  },
  {
    path: "/wishlist",
    name: "WishlistPage",
    component: WishlistPage,
  },
  { path: "/:pathMatch(.*)*", name: "ErrorPage", component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
