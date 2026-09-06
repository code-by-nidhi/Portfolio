import type { Track } from "@/types";

export interface Reason {
  /** The one-line claim, set in the card's own voice. */
  lead: string;
  title: string;
  /**
   * The supporting sentence. Optional because reason 06 arrived without one —
   * TODO: finish "Need a small change after launch?" and drop it in here.
   */
  detail?: string;
  accent: Track["accent"];
}

/** The "Why work with me" list, in the order it is dealt in. */
export const reasons: Reason[] = [
  {
    title: "Client-Focused",
    lead: "I build around your goals, not just a predefined template.",
    detail:
      "I take the time to understand your requirements before deciding how the solution should be built.",
    accent: "lilac",
  },
  {
    title: "Clean & Responsive",
    lead: "Your website should look good everywhere.",
    detail:
      "I build responsive interfaces that provide a smooth experience across desktop, tablet, and mobile devices.",
    accent: "mint",
  },
  {
    title: "Practical Solutions",
    lead: "Technology should solve a problem — not create one.",
    detail:
      "I focus on building useful, scalable solutions that are practical for your business and users.",
    accent: "sky",
  },
  {
    title: "Clear Communication",
    lead: "No confusing technical conversations.",
    detail:
      "I keep you updated throughout the project and explain important decisions in simple terms.",
    accent: "blush",
  },
  {
    title: "Quality-Focused",
    lead: "I don't consider the project finished when the code runs.",
    detail:
      "I pay attention to functionality, usability, responsiveness, and testing before delivery.",
    accent: "sand",
  },
  {
    title: "Support After Delivery",
    lead: "Need a small change after launch?",
    accent: "lilac",
  },
];
