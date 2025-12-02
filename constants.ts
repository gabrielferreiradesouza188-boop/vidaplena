import { PageView, ArticleSummary, StatData } from './types';

// Cores baseadas em psicologia das cores para saúde (Azul/Verde)
export const THEME_COLORS = {
  primary: 'blue-600',
  secondary: 'teal-500',
  accent: 'indigo-500',
};

// Dados simulados baseados em estatísticas gerais de saúde pública (contexto dos artigos)
export const RECOVERY_STATS: StatData[] = [
  { name: 'Intervenção Precoce', value: 75 },
  { name: 'Apoio Familiar', value: 85 },
  { name: 'Tratamento Isolado', value: 40 },
  { name: 'Sem Tratamento', value: 15 },
];

export const COMMUNITY_CONTENT: ArticleSummary[] = [
  {
    id: 'c1',
    title: 'Intervenção Breve (IB)',
    content: 'A Intervenção Breve é uma estratégia de saúde pública focada em identificar e motivar indivíduos com consumo de risco a mudarem seu comportamento. Estudos mostram que sessões curtas de aconselhamento podem reduzir significativamente o consumo.',
    icon: 'Activity'
  },
  {
    id: 'c2',
    title: 'Redução de Danos',
    content: 'Nem sempre a abstinência total é o primeiro passo possível. A redução de danos foca em minimizar as consequências negativas do uso do álcool, promovendo saúde e cidadania progressivamente.',
    icon: 'ShieldCheck'
  },
  {
    id: 'c3',
    title: 'Reinserção Social',
    content: 'O alcoolismo muitas vezes isola o indivíduo. Projetos comunitários devem focar na reintegração profissional e social, combatendo o estigma e oferecendo novas redes de apoio sóbrias.',
    icon: 'Users'
  }
];

export const FAMILY_CONTENT: ArticleSummary[] = [
  {
    id: 'f1',
    title: 'Superando a Codependência',
    content: 'Familiares frequentemente desenvolvem comportamentos de codependência, tentando "salvar" o alcoólatra e assumindo suas responsabilidades. É crucial que a família retome sua própria autonomia.',
    icon: 'HeartHandshake'
  },
  {
    id: 'f2',
    title: 'O Papel da Família no Tratamento',
    content: 'A família não é a causa, nem a cura, mas é parte fundamental da recuperação. O apoio emocional equilibrado, sem julgamentos ou superproteção, aumenta as chances de sucesso do tratamento.',
    icon: 'Home'
  },
  {
    id: 'f3',
    title: 'Saúde Mental do Cuidador',
    content: 'Cuidar de quem sofre de dependência gera alto estresse. Grupos de apoio (como Al-Anon) e terapia individual são essenciais para que os familiares mantenham sua própria saúde mental.',
    icon: 'Smile'
  }
];
