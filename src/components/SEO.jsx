
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://csjmu-icscis2027.vercel.app";

const pageSEO = {
  "/": {
    title:
      "ICSCIS 2027 | 2nd International Conference on Sustainable Computing and Intelligent Systems | CSJMU Kanpur",
    description:
      "Official website of the 2nd International Conference on Sustainable Computing and Intelligent Systems (ICSCIS 2027), organised by UIET, Chhatrapati Shahu Ji Maharaj University, Kanpur, India.",
  },

  "/about": {
    title: "About the Conference | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Learn about ICSCIS 2027, its objectives, scope and focus on sustainable computing and intelligent systems, organised by UIET, CSJMU Kanpur.",
  },

  "/call-for-papers": {
    title: "Call for Papers | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Explore the call for papers for ICSCIS 2027. Discover research areas and submission opportunities in sustainable computing and intelligent systems.",
  },

  "/important-dates": {
    title: "Important Dates | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Check important dates and conference schedules for ICSCIS 2027, the International Conference on Sustainable Computing and Intelligent Systems.",
  },

  "/author-info": {
    title: "Author Information | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Find author information and instructions for preparing and submitting research papers to ICSCIS 2027.",
  },

  "/registration": {
    title: "Conference Registration | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Find registration information and participation details for the 2nd International Conference on Sustainable Computing and Intelligent Systems.",
  },

  "/publication": {
    title: "Publication Details | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Explore publication information and research publication opportunities associated with ICSCIS 2027.",
  },

  "/speakers": {
    title: "Keynote Speakers | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Discover keynote speakers and invited experts participating in ICSCIS 2027 at CSJMU Kanpur.",
  },

  "/keynote-sessions": {
    title: "Keynote Sessions | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Explore keynote sessions and expert presentations planned for ICSCIS 2027.",
  },

  "/advisory-committee": {
    title: "Advisory Committee | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Meet the advisory committee members associated with the International Conference on Sustainable Computing and Intelligent Systems 2027.",
  },

  "/technical-committee": {
    title: "Technical Committee | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "View the technical committee of ICSCIS 2027 and the experts supporting the conference.",
  },

  "/steering-committee": {
    title: "Steering Committee | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Meet the steering committee members of the 2nd International Conference on Sustainable Computing and Intelligent Systems.",
  },

  "/call-for-reviewers": {
    title: "Call for Reviewers | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Explore reviewer opportunities for ICSCIS 2027 and contribute to the peer review of research submissions.",
  },

  "/submission-guidelines": {
    title: "Submission Guidelines | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Read the paper submission guidelines and manuscript preparation requirements for ICSCIS 2027.",
  },

  "/call-for-special-session": {
    title: "Call for Special Sessions | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Explore opportunities to propose special sessions for the International Conference on Sustainable Computing and Intelligent Systems 2027.",
  },

  "/call-for-sponsorship": {
    title: "Call for Sponsorship | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Explore sponsorship opportunities and partnership information for ICSCIS 2027 at CSJMU Kanpur.",
  },

  "/peer-review-policy": {
    title: "Peer Review Policy | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Read the peer review policy and research evaluation process for submissions to ICSCIS 2027.",
  },

  "/kanpur": {
    title: "Explore Kanpur | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Explore Kanpur, the host city of ICSCIS 2027, and find information about places around Chhatrapati Shahu Ji Maharaj University.",
  },

  "/gallery": {
    title: "Conference Gallery | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "View photographs and highlights from the International Conference on Sustainable Computing and Intelligent Systems.",
  },

  "/contact-us": {
    title: "Contact Us | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Contact the ICSCIS 2027 organizing committee at UIET, Chhatrapati Shahu Ji Maharaj University, Kanpur, India.",
  },

  "/cmt-acknowledgement": {
    title: "CMT Acknowledgement | ICSCIS 2027 | CSJMU Kanpur",
    description:
      "Information about the Microsoft Conference Management Toolkit acknowledgement for ICSCIS 2027.",
  },
};

const noIndexPaths = ["/download", "/willbe-soon"];

function setMetaTag(attribute, key, content) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function SEO() {
  const location = useLocation();

  useEffect(() => {
    const path =
      location.pathname.replace(/\/+$/, "") || "/";

    const page = pageSEO[path];

    // Unknown pages should not be indexed as valid conference pages.
    if (!page) {
      document.title = "Page Not Found | ICSCIS 2027";

      setMetaTag(
        "name",
        "robots",
        "noindex, follow"
      );

      return;
    }

    const canonicalURL = `${BASE_URL}${path === "/" ? "/" : path}`;

    // Update browser title.
    document.title = page.title;

    // Update standard SEO metadata.
    setMetaTag("name", "description", page.description);

    setMetaTag(
      "name",
      "robots",
      noIndexPaths.includes(path)
        ? "noindex, follow"
        : "index, follow"
    );

    // Update canonical URL.
    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalURL;

    // Update Open Graph metadata.
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:title", page.title);
    setMetaTag(
      "property",
      "og:description",
      page.description
    );
    setMetaTag("property", "og:url", canonicalURL);
    setMetaTag(
      "property",
      "og:site_name",
      "ICSCIS 2027 - CSJMU Kanpur"
    );
  }, [location.pathname]);

  return null;
}

export default SEO;
