import React from 'react';
import { Brain, Cpu, Clock } from 'lucide-react';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  icon: React.ReactNode;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "evolution-of-eeg-sa",
    title: "The Evolution of EEG in South African Clinical Practice",
    excerpt: "Exploring how electroencephalography transitioned from research curiosities to essential diagnostic tools in SA hospitals over the last 50 years.",
    date: "May 12, 2026",
    author: "Mr. Ocean Lesley Naidoo",
    category: "History & Practice",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=2070",
    icon: <Brain className="w-5 h-5" />,
    content: [
      "The clinical application of Electroencephalography (EEG) in South Africa has a rich, multi-layered history that reflects the broader developments in continental neurophysiology. In the mid-20th century, EEG was largely confined to experimental research settings and a few elite academic institutions in cities like Johannesburg and Cape Town.",
      "Early practitioners relied on cumbersome, multi-channel analog machines that required meticulous calibration and specialized paper for recording. These 'ink-and-paper' days demanded an extraordinary level of technical skill, as neurophysiologists had to manually interpret complex waveforms without the aid of digital filtering or automated analysis.",
      "The 1980s and 90s marked a significant turning point as digital systems began to replace analog counterparts. This transition not only improved data storage and retrieval but also allowed for the development of specialized protocols such as ambulatory EEG and video-EEG monitoring (VEM). In local provincial hospitals, these advancements were critical in improving the diagnostic accuracy for epilepsy and other paroxysmal disorders.",
      "Today, the landscape is defined by high-density arrays and wireless telemetry. The integration of EEG into primary care pathways, particularly in rural South African districts via telemedicine, represents the current frontier. As we look forward, the challenge remains ensuring that these sophisticated diagnostic tools are accessible to all, bridging the gap between tertiary urban centers and remote community clinics."
    ]
  },
  {
    slug: "sleep-disorders-urban-sa",
    title: "Sleep Disorders: A Hidden Epidemic in Urban SA?",
    excerpt: "A study on the rising prevalence of sleep apnea and insomnia in Johannesburg's working class and its neurophysiological impact.",
    date: "May 07, 2026",
    author: "Somnology Dept",
    category: "Sleep Medicine",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=2070",
    icon: <Clock className="w-5 h-5" />,
    content: [
      "In the bustling metropolises of South Africa, particularly within the economic hubs of Gauteng, a silent health crisis is unfolding. While infectious diseases and cardiovascular health often dominate public health discourse, the prevalence of sleep-disordered breathing and chronic insomnia is rising at an alarming rate across urban demographics.",
      "Our recent observations indicate that the 'urban hustle' culture, combined with high levels of environmental noise, light pollution, and sedentary lifestyles, is contributing to a significant degradation of sleep quality. Obstructive Sleep Apnea (OSA), once thought to be primarily a condition of the affluent, is now being diagnosed frequently in emerging middle-class and working-class populations.",
      "The neurophysiological impact of chronic sleep deprivation is profound. We see evidence of cognitive slowing, mood dysregulation, and heightened systemic inflammation in patients who consistently fail to achieve restorative REM and deep-stage sleep. Furthermore, the economic cost of decreased productivity and sleep-related workplace accidents is reaching critical levels.",
      "Addressing this 'hidden epidemic' requires a multi-pronged approach: increasing public awareness about sleep hygiene, expanding the availability of affordable Level III home sleep testing, and integrating sleep assessments into routine primary care screenings. Neurophysiology units like Neurowave are at the forefront of this effort, providing the diagnostic clarity needed to manage these complex sleep architectures."
    ]
  },
  {
    slug: "ai-neurodiagnostics-africa",
    title: "Future Frontiers: AI and Neurodiagnostics in Africa",
    excerpt: "Sifting through the hype: Real-world applications of machine learning in EEG analysis across the African continent.",
    date: "May 01, 2026",
    author: "Mr. Ocean Lesley Naidoo",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
    icon: <Cpu className="w-5 h-5" />,
    content: [
      "Artificial Intelligence (AI) and Machine Learning (ML) are no longer futuristic concepts in the field of clinical neurophysiology. In the context of Africa's developing nations, where specialized neurophysiologists are often in short supply, AI-driven diagnostic assistance represents a transformative opportunity rather than just a technical convenience.",
      "The primary strength of AI in our field lies in its ability to process vast quantities of data from high-density EEG or PSG recordings. Automated spike detection algorithms and pattern recognition models are already helping to triage thousands of hours of data, allowing clinicians to focus their expertise on the most complex segments of a study.",
      "However, the implementation of AI in Africa faces unique challenges. Data sets used to train global AI models often lack diversity, potentially leading to algorithmic bias when applied to local populations with different genetic backgrounds or environmental exposures. There is a critical need for 'localized AI'—models developed and validated using data from African patients.",
      "Looking ahead, the 'Future Frontier' is not about replacing the clinician, but rather empowering them. At Neurowave, we are exploring how AI can assist in the early identification of subtle biomarkers for neurological decline, enabling earlier intervention and better long-term outcomes for patients across the continent."
    ]
  }
];
