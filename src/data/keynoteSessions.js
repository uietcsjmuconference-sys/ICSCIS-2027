import AmolMKhadge from "../assets/imagespeakers/Amol_M._Khadge.jpeg";
import AnokhKishore from "../assets/imagespeakers/Anokh_Kishore.jpeg";
import ChandanNagaraju from "../assets/imagespeakers/Chandan-Malagalu-Nagaraju.jpeg";
import ChandraAvula from "../assets/imagespeakers/Chandra_Shekar_Reddy_Avula.jpeg";
import DivyarajJatav from "../assets/imagespeakers/Divyaraj_Singh_Jatav.jpeg";
import ErHimaniFnu from "../assets/imagespeakers/Er-Himani-Fnu-Bo3oMtie.png";
import FaizMulla from "../assets/imagespeakers/Faiz_Mulla.jpeg";
import HarshendraGite from "../assets/imagespeakers/Harshendra_Gite.jpeg";
import MahamoodMirza from "../assets/imagespeakers/Mahamood_Hussain_Mirza.jpeg";
import MahatmaMarri from "../assets/imagespeakers/Mahatma_Reddy_Marri.jpeg";
import MahendrakumarKalal from "../assets/imagespeakers/Mahendrakumar_Kalal.jpeg";
import MdMaksudulAmin from "../assets/imagespeakers/Maksudul_Amin.jpeg";
import NoopurSharma from "../assets/imagespeakers/Noopur_sharma.jpeg";
import RakeshGahlot from "../assets/imagespeakers/Rakesh_Gahlot.jpeg";
import SaiKalyanModini from "../assets/imagespeakers/Sai_Kalyan_Kumar_Modini.jpeg";
import SandeepMannapur from "../assets/imagespeakers/Sandeep_Bharadwaj_Mannapur.jpeg";
import ShaileshChaudhary from "../assets/imagespeakers/Shailesh_Sayarmal_Chaudhary.jpeg";
import ShekarVollem from "../assets/imagespeakers/Shekar_Vollem.jpeg";
import SuneelMogali from "../assets/imagespeakers/Suneel_Kumar_Mogali.jpeg";
import VenkataPatibandla from "../assets/imagespeakers/Venkata_Jayadeep_Patibandla.jpeg";
import VirendraChawra from "../assets/imagespeakers/Virendra_Singh_Chawra.jpeg";
import Prof_Alvaro_Rocha from "../assets/imagespeakers/Prof-Alvaro-Rocha-aNHygu6H.png";
const keynoteSessions = [
  {
    id: "Prof_Alvaro_Rocha",
    image: Prof_Alvaro_Rocha,
    name: "Prof. Alvaro Rocha",
    designation: "Professor of Information Systems",
    affiliation: "ISEG, University of Lisbon",
    location: "Portugal",
    title: "Digital Health Maturity Models and their Role in Transforming Care Systems",
    category: "Healthcare Informatics & Digital Health Systems",
  },
  {
    id: "anokh-kishore-green-backends",
    image: AnokhKishore,
    name: "Anokh Kishore",
    designation: "Senior Software Engineering Manager",
    affiliation: "Capital One Financial Services",
    location: "USA",
    title: "Green Backends: Engineering for the Carbon-Aware Era",
    category: "Sustainable AI & Green Computing",
  },
  {
    id: "harshendra-gite-cognitive-risk",
    image: HarshendraGite,
    name: "Harshendra Gite",
    designation: "Sr Director",
    affiliation: "LTM LIMITED",
    location: "USA",
    title:
      "From Prediction to Prevention: AI-Driven Cognitive Risk Management for Adaptive Enterprise Governance",
    category: "Agentic AI & Financial Security",
  },
  {
    id: "virendra-singh-chawra-fraud-defense",
    image: VirendraChawra,
    name: "Virendra Singh Chawra",
    designation: "Specialist Senior",
    affiliation: "Deloitte Consulting LLP",
    location: "USA",
    title: "From Rules to Reasoning: How Agentic AI Is Redefining Fraud Defense",
    category: "Agentic AI & Financial Security",
  },
  {
    id: "divyaraj-singh-jatav-financial-intelligence",
    image: DivyarajJatav,
    name: "Divyaraj Singh Jatav",
    designation: "Supply Chain Planner",
    affiliation: "Independent Researcher, Westcliff University",
    location: "USA",
    title:
      "From Signals to Decisions: Interpretable AI Frameworks for Real-Time Risk, Behavior, and Financial Intelligence",
    category: "Agentic AI & Financial Security",
  },
  {
    id: "faiz-mulla-intelligent-enterprise",
    image: FaizMulla,
    name: "Faiz Mulla",
    designation: "Product Manager / Business Analyst",
    affiliation: "Virginia Department of Social Services (VDSS)",
    location: "United States",
    title:
      "Engineering Intelligent Enterprise Systems: AI-Driven Decision Architectures for Public Sector Digital Transformation",
    category: "Enterprise AI & Cloud",
  },
  {
    id: "sandeep-bharadwaj-mannapur-trust-equation",
    image: SandeepMannapur,
    name: "Sandeep Bharadwaj Mannapur",
    designation: "Lead AI&ML Engineer",
    affiliation: "ServiceNow, Inc.",
    location: "United States",
    title:
      "The Trust Equation: Building Human-in-the-Loop Guardrails for Sustainable Agentic AI Systems",
    category: "Agentic AI & Financial Security",
  },
  {
    id: "shekar-vollem-agentic-ai",
    image: ShekarVollem,
    name: "Shekar Vollem",
    designation: "Independent Researcher",
    affiliation: "Capital One Financial Corporation",
    location: "USA",
    title:
      "From Rules to Reasoning: Agentic AI and Explainable Systems for Next‑Generation Fraud Management",
    category: "Agentic AI & Financial Security",
  },
  {
    id: "shailesh-sayarmal-chaudhary-financial-integrity",
    image: ShaileshChaudhary,
    name: "Shailesh Sayarmal Chaudhary",
    designation: "Software Engineer",
    affiliation: "Amazon Web Services",
    location: "United States",
    title:
      "The Sentinel Framework: Architecting Autonomous Financial Integrity in the Age of Synthetic Fraud",
    category: "Agentic AI & Financial Security",
  },
  {
    id: "suneel-kumar-mogali-autonomous-intelligence",
    image: SuneelMogali,
    name: "Suneel Kumar Mogali",
    designation: "Lead Technical Consultant",
    affiliation: "Independent Researcher",
    location: "USA",
    title:
      "Sustainable Autonomous Intelligence: Energy Efficient AI Architectures for Cloud Scale Enterprise Systems",
    category: "Sustainable AI & Green Computing",
  },
  {
    id: "mahendrakumar-kalal-intelligent-manufacturing",
    image: MahendrakumarKalal,
    name: "Mahendrakumar Kalal",
    designation: "Senior SAP Analyst",
    affiliation: "O.C. Tanner",
    location: "Salt Lake City, Utah, USA",
    title: "Lean-Driven Intelligent Manufacturing",
    category: "Healthcare, Supply Chain & Manufacturing",
  },
  {
    id: "md-maksudul-amin-explainable-ai",
    image: MdMaksudulAmin,
    name: "Md. Maksudul Amin",
    designation:
      "Most recently served as Group Head of Internal Audit (Vice President)",
    affiliation:
      "Pace University (Lubin School of Business) — currently pursuing Master of Science in Accounting, Data Analytics & Technologies",
    title:
      "From Research to Boardroom: Operationalizing Explainable AI in Risk, Audit, and Corporate Governance",
    category: "Agentic AI & Financial Security",
  },
  {
    id: "sai-kalyan-kumar-modini-sustainable-ai",
    image: SaiKalyanModini,
    name: "Sai Kalyan Kumar Modini",
    designation: "GCP Cloud Specialist, Sustainable AI Lead & Published Author",
    affiliation: "HSBC",
    location: "Houston, TX, USA",
    title:
      "Sustainable AI Foundations and Multi-Cloud Implementation: A Practical Framework for Carbon-Aware Infrastructure",
    category: "Sustainable AI & Green Computing",
  },
  {
    id: "mahamood-hussain-mirza-production-ai",
    image: MahamoodMirza,
    name: "Mahamood Hussain Mirza",
    designation: "Software Engineer",
    affiliation: "Biztegy Analytics INC",
    location: "United States",
    title: "Beyond Deployment: Managing Drift, Bias, and Decay in Production AI",
    category: "Enterprise AI & Cloud",
  },
  {
    id: "chandra-shekar-reddy-avula-inventory",
    image: ChandraAvula,
    name: "Chandra Shekar Reddy Avula",
    designation: "Senior Software Engineer",
    affiliation: "Verizon",
    location: "USA",
    title:
      "AI-Driven Inventory Flow Regulator with Demand-Sensitive Allocation Matrix for Supply Chain Synchronization",
    category: "Healthcare, Supply Chain & Manufacturing",
  },
  {
    id: "noopur-sharma-aml",
    image: NoopurSharma,
    name: "Noopur Sharma",
    designation: "AI & Data Engineering Manager",
    affiliation: "Deloitte Consulting LLP",
    location: "USA",
    title:
      "AI Machine Learning for Transaction Monitoring and Suspicious Activity Detection in AML",
    category: "Agentic AI & Financial Security",
  },
  {
    id: "mahatma-reddy-marri-cloud",
    image: MahatmaMarri,
    name: "Mahatma Reddy Marri",
    designation: "Advanced systems administrator",
    affiliation: "K Force",
    location: "Texas, USA",
    title:
      "A Novel Architectural Framework for Zero-Downtime Updates in Multi-Client Cloud Systems",
    category: "Enterprise AI & Cloud",
  },
  {
    id: "amol-m-khadge-explainable-ai",
    image: AmolMKhadge,
    name: "Amol M. Khadge",
    affiliation: "Independent Researcher, MSR Technology Group",
    location: "USA",
    title: "Explainable AI and Cloud Computing for Financial Security",
    category: "Agentic AI & Financial Security",
  },
  {
    id: "rakesh-gahlot-financial-systems",
    image: RakeshGahlot,
    name: "Rakesh Gahlot",
    affiliation: "Independent Researcher, Mphasis Corporation",
    location: "USA",
    title:
      "Next-Generation Financial Systems: Integrating Deep Learning, Explainability, and Cryptographic Security",
    category: "Agentic AI & Financial Security",
  },
  {
    id: "chandan-malagalu-nagaraju-healthcare",
    image: ChandanNagaraju,
    name: "Chandan Malagalu Nagaraju",
    affiliation: "University of Alabama at Birmingham; A2Z Ozone Inc.",
    location: "Louisville, KY, USA",
    title:
      "AI-Driven Healthcare Systems: Transforming Patient Care through Sustainable and Intelligent Technologies",
    category: "Healthcare, Supply Chain & Manufacturing",
  },
  {
    id: "venkata-jayadeep-patibandla-healthcare",
    image: VenkataPatibandla,
    name: "Venkata Jayadeep Patibandla",
    affiliation: "University of Louisville; Context 4 Healthcare",
    location: "Chicago, USA",
    title:
      "Smart Healthcare Ecosystems: Integrating IoT, Data Analytics, and Sustainable Computing for Better Outcomes",
    category: "Healthcare, Supply Chain & Manufacturing",
  },
  {
    id: "himani-fnu-fintech",
    image: ErHimaniFnu,
    name: "Er. Himani Fnu",
    designation: "Cloud solution architect",
    affiliation: "Wipro Ltd.",
    location: "USA",
    title:
      "Cloud-Powered Financial Innovation: Building Secure, Scalable, and Sustainable FinTech Ecosystems",
    category: "Enterprise AI & Cloud",
  },
  {
    id: "mahamood-hussain-mirza-fintech",
    image: MahamoodMirza,
    name: "Mahamood Hussain Mirza",
    designation: "Software Engineer",
    affiliation: "Biztegy Analytics INC",
    location: "USA",
    title:
      "Next-Generation FinTech: Leveraging Cloud Computing, AI, and Sustainability for Resilient Financial Systems",
    category: "Enterprise AI & Cloud",
  },
];

export default keynoteSessions;
