import {
  Baby,
  Code2,
  Search,
  AlertTriangle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// ============================================================
// FICHIER DE CONFIGURATION CENTRAL
// Modifiez ces valeurs quand la future mariée sera connue,
// ou pour ajuster la date, le lieu, le programme, etc.
// ============================================================

export const weddingConfig = {
  groom: {
    name: "Ibrahima Sory Barry",
    role: "Étudiant en Génie Logiciel",
  },
  bride: {
    name: "Future Madame Barry",
    role: "Identité inconnue à ce jour",
    status: "Candidatures actuellement ouvertes.",
  },
  // Date du mariage — modifiez cette date ISO pour ajuster le compte à rebours
  weddingDateISO: "2027-07-15T10:00:00",
  weddingMonthLabel: "Juillet 2027",

  witness: {
    name: "Abdoul Gadiry Diallo",
    role: "Témoin officiel",
  },

  location: {
    name: "Cimenterie T8",
    city: "Conakry",
    country: "Guinée",
    mapsQuery: "Cimenterie T8, Conakry, Guinée",
    mapsEmbedSrc:
      "https://www.google.com/maps?q=Cimenterie+T8+Conakry+Guin%C3%A9e&output=embed",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Cimenterie+T8+Conakry+Guin%C3%A9e",
  },

  contact: {
    phone: "622 18 09 33",
    whatsappLink: "https://wa.me/224622180933",
    telLink: "tel:+224622180933",
  },

  program: [
    { time: "1", title: "Accueil" },
    { time: "2", title: "Nikah" },
    { time: "3", title: "Invocations" },
    { time: "4", title: "Repas" },
    { time: "5", title: "Remerciements" },
  ],

  story: [
    {
      step: 1,
      title: "Naissance d'Ibrahima",
      description: "Le début d'une grande histoire… encore à écrire.",
      icon: Baby as LucideIcon,
    },
    {
      step: 2,
      title: "Études en Génie Logiciel",
      description: "Apprendre à construire des systèmes robustes — et patient.",
      icon: Code2 as LucideIcon,
    },
    {
      step: 3,
      title: "Recherche active de la future mariée",
      description: "Requête envoyée. En attente de réponse…",
      icon: Search as LucideIcon,
    },
    {
      step: 4,
      title: "Erreur 404",
      description: "Future épouse introuvable sur ce serveur pour le moment.",
      icon: AlertTriangle as LucideIcon,
    },
    {
      step: 5,
      title: "À compléter bientôt",
      description: "In Sha Allah.",
      icon: Sparkles as LucideIcon,
    },
  ],

  faq: [
    {
      question: "Pourquoi créer le site avant même de trouver la mariée ?",
      answer:
        "Un développeur anticipe toujours les mises à jour. La candidate arrivera plus tard, le site est déjà prêt.",
    },
    {
      question: "Qui est la mariée ?",
      answer: "Seul Allah connaît actuellement son identité.",
    },
    {
      question: "Pourquoi ce site ?",
      answer:
        "Parce qu'une invitation papier, c'est bien. Une invitation version développeur, c'est encore mieux.",
    },
    {
      question: "Y a-t-il un formulaire pour postuler ?",
      answer:
        "Non. Ici, pas de formulaire ni de file d'attente : la décision revient uniquement à Allah, en Son temps.",
    },
  ],
};

export type WeddingConfig = typeof weddingConfig;
