export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  year: number;
  fullDescription: string;
  challenges: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Coral Image Identifier",
    description: "A computer vision platform and scientific editorial dashboard built with TensorFlow, EfficientNetV2, FastAPI, and React for identifying reef coral species with deep learning telemetry and real-time processing.",
    image: "/coral-identifier.jpg",
    technologies: ["TensorFlow / Keras", "EfficientNetV2", "FastAPI", "OpenCV", "React (Vite)", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/ejaebker/Coral-Image-identifier",
    year: 2025,
    fullDescription: `Coral Image Identifier (CoralID) is an end-to-end computer vision platform and scientific editorial interface built to automate coral species taxonomy (e.g., Acropora, Montipora, Zoanthids) from subsea photography.

DEEP LEARNING MODEL DESIGN & CV PIPELINE:
- Model Architecture & Transfer Learning: Upgraded backbone from MobileNetV2 (69% val acc) to EfficientNetV2-B0, boosting validation accuracy to 81%. Executed a two-stage training pipeline (Stage 1 warmup head + Stage 2 unfreezing top layers 200–270 for fine-tuning at a 1e-5 learning rate).
- Hyperparameter Optimization: Utilized Keras-Tuner (Hyperband) to optimize dense head dropout rates and learning rate schedules.
- LAB-Space CLAHE Enhancement: Implemented Contrast Limited Adaptive Histogram Equalization on the L (Lightness) channel in LAB color space to normalize uneven exposure and blue-spectrum underwater lighting while preserving true species coloration.
- Global Perceptual Deduplication: Developed a 64-bit pHash algorithm to remove cross-class visual duplicates across dataset categories, preventing data leakage.
- Class Imbalance & Evaluation: Applied Scikit-Learn mathematical class weighting to prevent minority class bias, evaluating performance via confusion matrices and precision/recall reporting.
- Automated Ingestion: Built scrapers for retailer APIs, Bing Image Search, and integrated the iNaturalist community observation API.

SCIENTIFIC UX DESIGN & DASHBOARD (CoralID v4.0):
- Editorial Scientific Interface: Designed a high-fidelity dashboard built with React (Vite), Tailwind CSS, and Framer Motion, utilizing OKLCH color spaces and a tactile editorial grain aesthetic.
- HUD Neural Ingestor: Created an interactive drag-and-drop upload zone with real-time scan-line animations and live technical telemetry.
- Visual Architecture Pipeline: Implemented an interactive 4-stage validation infographic (Preprocessing, Feature Extraction, Neural Analysis, Taxonomy Output).
- Local Research Archives: Engineered persistent local browser history saving specimen runs, timestamped telemetry, and species confidence distribution metrics.
- FastAPI REST Backend: Served real-time model inference via FastAPI and Uvicorn with interactive Swagger API telemetry endpoints.`,
    challenges: "Subsea reef imagery suffers from blue-light attenuation, variable water turbidity, and heavy class imbalance. Automating raw data ingestion required robust CLAHE lighting normalization and global perceptual hashing. On the frontend, the challenge was translating technical neural telemetry into an engaging, readable 'Scientific Editorial' dashboard without overwhelming the user.",
    outcome: "Built a fully functional, production-grade computer vision pipeline and FastAPI inference backend paired with a high-fidelity React dashboard (CoralID v4.0), elevating model accuracy to 81% on EfficientNetV2-B0 while delivering a tactile, researcher-grade user experience.",
  },
  {
    id: 2,
    title: "Engineering Portfolio",
    description: "An expressive editorial portfolio designed with sophisticated typography and organic motion. Built using Next.js 15 and TypeScript, the project was developed in collaboration with Gemini CLI for a seamless user experience.",
    image: "/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Gemini CLI"],
    link: "https://github.com/ejaebker/engineering-portfolio",
    year: 2026,
    fullDescription: `Built using Next.js 15, TypeScript, and Framer Motion, this portfolio serves as a technical demonstration of modern web standards and high-performance frontend architecture. The project was developed in collaboration with Gemini CLI, leveraging AI-driven orchestration to accelerate the transition from architectural concept to a polished, production-ready interface.

Key technical features include:
- AI-Augmented Workflow: Developed using Gemini CLI for rapid prototyping, strategic refactoring, and complex state management.
- Custom Cursor System: Intelligent, reactive cursor that adapts to interactive elements.
- Organic Motion Engine: Custom Framer Motion configurations for smooth, non-linear transitions.
- Responsive Architecture: Fluid layouts that maintain typographic integrity across all device scales.`,
    challenges: "The primary challenge was balancing complex visual effects and motion with high performance and accessibility standards. Utilizing Gemini CLI allowed for efficient experimentation with non-linear animations while ensuring that high-contrast typography remained performant across different devices.",
    outcome: "Successfully created a unique, high-impact digital identity that reflects technical maturity and design-forward thinking, achieving high Lighthouse scores while maintaining a rich, immersive aesthetic.",
  },
];
