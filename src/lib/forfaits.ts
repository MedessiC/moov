export interface Forfait {
  id: string;
  name: string;
  price: string;
  duration: string;
  data: string;
  members: string;
  perMember: string;
  features: string[];
  popular?: boolean;
}

export const forfaits: Forfait[] = [
  {
    id: "illimite-4j",
    name: "Illimité 4J",
    price: "500",
    duration: "4 jours",
    data: "6 GoPlus",
    members: "Illimité",
    perMember: "500 FCFA",
    features: [
      "6 GoPlus de données",
      "Valable 4 jours",
      "Accès illimité",
    ],
    popular: false,
  },
  {
    id: "illimite-20j",
    name: "Illimité 20J",
    price: "1 500",
    duration: "20 jours",
    data: "15 GoPlus",
    members: "Illimité",
    perMember: "1 500 FCFA",
    features: [
      "15 GoPlus de données",
      "Valable 20 jours",
      "Accès illimité",
    ],
    popular: false,
  },
  {
    id: "illimite-30j-65",
    name: "Illimité 30J",
    price: "4 500",
    duration: "30 jours",
    data: "65 GoPlus",
    members: "Illimité",
    perMember: "4 500 FCFA",
    features: [
      "65 GoPlus de données",
      "Valable 30 jours",
      "Accès illimité",
    ],
    popular: true,
  },
  {
    id: "illimite-30j-80",
    name: "Illimité 30J Plus",
    price: "5 500",
    duration: "30 jours",
    data: "80 GoPlus",
    members: "Illimité",
    perMember: "5 500 FCFA",
    features: [
      "80 GoPlus de données",
      "Valable 30 jours",
      "Accès illimité",
    ],
    popular: false,
  },
  {
    id: "illimite-30j-100",
    name: "Illimité 30J Pro",
    price: "6 500",
    duration: "30 jours",
    data: "100 GoPlus",
    members: "Illimité",
    perMember: "6 500 FCFA",
    features: [
      "100 GoPlus de données",
      "Valable 30 jours",
      "Accès illimité",
    ],
    popular: false,
  },
  {
    id: "illimite-30j-120",
    name: "Illimité 30J Max",
    price: "7 750",
    duration: "30 jours",
    data: "120 GoPlus",
    members: "Illimité",
    perMember: "7 750 FCFA",
    features: [
      "120 GoPlus de données",
      "Valable 30 jours",
      "Accès illimité",
    ],
    popular: false,
  },
];

export function getForfaitLabel(id: string): string {
  const forfait = forfaits.find(f => f.id === id);
  return forfait ? `${forfait.name} - ${forfait.perMember}` : id;
}
