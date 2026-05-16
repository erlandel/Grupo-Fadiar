import { Award, Brain, BadgeCheck, Cog } from "lucide-react";

export interface SupportItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const supportItems: SupportItem[] = [
  {
    id: 1,
    title: 'Funcionalidad',
    description:
      'Nuestras soluciones están diseñadas con un enfoque preciso en la eficiencia y la consecución de resultados tangibles. Aseguramos que cada producto contribuya directamente a la mejora de vida de nuestros clientes.',
    icon: Cog,
  },
  {
    id: 2,
    title: 'Innovación',
    description:
      'Nuestra cultura empresarial se cimenta en la búsqueda activa de la vanguardia. Invertimos significativamente en I+D para proporcionar soluciones que anticipen las necesidades futuras de nuestros clientes.',
    icon: Brain,
  },
  {
    id: 3,
    title: 'Calidad',
    description:
      'Implementamos un riguroso control de calidad en cada etapa, desde la concepción hasta la entrega. Esto se traduce en una fiabilidad excepcional, una vida útil prolongada y un rendimiento consistente.',
    icon: Award,
  },
  {
    id: 4,
    title: 'Garantía',
    description:
      'Respaldamos la excelencia de nuestros productos con una garantía integral. Este compromiso es la manifestación de nuestra confianza y ofrece a nuestros clientes una seguridad absoluta.',
    icon: BadgeCheck,
  },
];