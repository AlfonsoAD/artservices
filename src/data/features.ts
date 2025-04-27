import { Zap, TabletSmartphone, CodeXml, Computer, Cog, Spline, HandPlatter } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Spline,
                title: 'Maquinados de Precisión',
                description:
                    'Fabricación de piezas especializadas con materiales de alta calidad como Nylamid, Bronce, Acero 4140, D2/A2, Inoxidable y Delrin.',
            },
            {
                icon: Cog,
                title: 'Diseño y Desarrollo',
                description:
                    'Diseño de piezas, estructuras y estaciones de trabajo funcionales, adaptadas a los requerimientos de cada proyecto.',
            },
            {
                icon: HandPlatter,
                title: 'Servicios Industriales',
                description:
                    'Soldadura, ensamblado de estructuras, integraciones mecánicas y eléctricas para fortalecer tu infraestructura industrial.',
            },
            {
                icon: CodeXml,
                title: 'Desarrollo de Software',
                description:
                    'Soluciones informáticas a la medida, incluyendo desarrollo de software, aplicaciones web, así como integración de API´s y sistemas  .',
            },
            {
                icon: Computer,
                title: 'Servicos IT y Soporte Técnico',
                description:
                    'Soporte técnico y mantenimiento de sistemas informáticos, así como la implementación de soluciones tecnológicas para optimizar procesos.',
            },
            {
                icon: TabletSmartphone,
                title: 'Integraciones Personalizadas',
                description:
                    'Integramos componentes, sistemas y procesos para mejorar la eficiencia operativa y reducir tiempos de producción.',
            },
        ],
    },
};
