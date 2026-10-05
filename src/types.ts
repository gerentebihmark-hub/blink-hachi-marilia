export interface LinkItem {
  id: string;
  label: string;
  description?: string;
  url: string;
  icon: string;
  highlighted?: boolean;
  tag?: string; // ex: "★★★★★", "Recomendado", "Destaque"
  eventKey: string; // identificador único para rastreamento de conversão
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface RestaurantInfo {
  name: string;
  unit: string;
  address: string;
  cnpj?: string;
  phone: string;
  phoneFormatted: string;
  instagram?: string;
  hours: string[];
}
