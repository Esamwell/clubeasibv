import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  CarFront,
  Users,
  Repeat,
  Target,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  Award,
  ArrowRight,
  ChevronDown,
  Handshake
} from "lucide-react";

import financeBg from "@/assets/images/finance-abstract.png";
import darkBg from "@/assets/images/dark-bg.png";
import logoBV from "@assets/image_1771867850507.png";
import logoASI from "@assets/Gemini_Generated_Image_d8xhdrd8xhdrd8xh-Photoroom_1771868393946.png";
import shoppingImg from "@assets/image_1771868431508.png";

const slides = [
  {
    id: 1,
    title: "Contexto",
    subtitle: "Auto Shopping como ecossistema",
    content: "O Auto Shopping Itapoan opera como um ecossistema de negócios, concentrando fluxo recorrente de compradores e proprietários de veículos. Esse ambiente cria oportunidades contínuas, tanto comerciais quanto financeiras.",
    highlight: "Cada comprador de veículo representa múltiplas oportunidades financeiras ao longo do tempo.",
    icon: Building2,
    bg: shoppingImg
  },
  {
    id: 2,
    title: "Comportamento Financeiro Pós-Compra",
    subtitle: "Comportamento do comprador de veículos",
    content: "A relação financeira do cliente com o veículo não se encerra na compra. Após a aquisição, surgem novas demandas naturais: crédito, refinanciamento, upgrade, proteção e serviços.",
    highlight: "A compra do carro é apenas o primeiro evento financeiro do cliente.",
    icon: CarFront,
    bg: darkBg
  },
  {
    id: 3,
    title: "Plataforma Clube de Benefício ASI",
    subtitle: "A Solução",
    content: "O Clube de Benefício ASI é uma plataforma de relacionamento estruturada para clientes que já realizaram a compra de veículos dentro do Auto Shopping Itapoan, permitindo ativação contínua, comunicação recorrente e geração de oportunidades ao longo do ciclo de vida do proprietário.",
    highlight: "A plataforma transforma compradores em uma base ativa de relacionamento financeiro.",
    icon: Users,
    bg: darkBg,
    isASI: true
  },
  {
    id: 4,
    title: "Lógica da Ferramenta",
    subtitle: "Como o sistema funciona",
    list: [
      "Cliente adquire veículo no Auto Shopping",
      "Cliente é incorporado à base do clube",
      "Plataforma estabelece canal de relacionamento contínuo",
      "Base passa a ser ativa e rastreável",
      "Oportunidades financeiras podem ser ativadas ao longo do tempo"
    ],
    highlight: "O clube transforma um evento de venda em um canal recorrente de relacionamento.",
    icon: Repeat,
    bg: darkBg,
    isASI: true
  },
  {
    id: 5,
    title: "O Ativo Mais Valioso",
    subtitle: "O que realmente existe no projeto",
    content: "O Clube de Benefício ASI consolida uma base composta por proprietários de veículos, com histórico de compra validado e comportamento financeiro naturalmente recorrente ao longo do tempo.",
    highlight: "A base do clube equivale a uma carteira contínua de oportunidades financeiras.",
    icon: Target,
    bg: financeBg,
    isASI: true
  },
  {
    id: 6,
    title: "Ciclo Financeiro",
    content: "O proprietário de veículo naturalmente transita por múltiplos eventos financeiros ao longo do tempo:",
    list: [
      "Financiamento ou refinanciamento",
      "Crédito com garantia do veículo",
      "Substituição / renovação de veículo",
      "Seguros e serviços financeiros",
      "Novos eventos de crédito"
    ],
    highlight: "Cada proprietário de veículo representa um ciclo contínuo de oportunidades financeiras.",
    icon: TrendingUp,
    bg: darkBg
  },
  {
    id: 7,
    title: "Papel Estratégico",
    subtitle: "Valor Estratégico do Clube",
    content: "O Clube de Benefício ASI estrutura um canal permanente de relacionamento com clientes pós-compra, permitindo reativação recorrente, previsibilidade de acesso e geração contínua de oportunidades financeiras.",
    highlight: "A plataforma converte um evento de venda em um ativo de longo prazo.",
    icon: ShieldCheck,
    bg: darkBg,
    isASI: true
  },
  {
    id: 8,
    title: "Escala Comercial do Auto Shopping Itapoan",
    subtitle: "Volume e Previsibilidade",
    content: "Formação contínua de carteira qualificada, recorrente e previsível para instituição financeira exclusiva.",
    list: [
      "Operação média mensal (fluxo regular): 400 veículos / mês",
      "Operação média em períodos de feirão: 700 veículos / mês",
      "Volume médio anual de vendas: 8.960 veículos / ano",
      "Geração anual de novos proprietários: 8.960 clientes / ano",
      "Base potencial em 12 meses: 8.960 clientes ativos"
    ],
    highlight: "Cada veículo vendido representa um novo ativo financeiro em potencial.",
    icon: TrendingUp,
    bg: financeBg,
    isASI: true
  },
  {
    id: 9,
    title: "A Oportunidade",
    subtitle: "Para o Banco BV",
    content: "O Banco BV não participa como anunciante, mas como instituição associada a uma base qualificada de proprietários de veículos, com potencial recorrente de operações financeiras.",
    highlight: "O valor da parceria não está na exposição da marca, mas na previsibilidade de acesso ao cliente.",
    icon: Briefcase,
    bg: financeBg,
    isBV: true
  },
  {
    id: 10,
    title: "Benefícios Diretos ao Banco BV",
    subtitle: "O que o BV ganha",
    list: [
      "Exclusividade financeira dentro do Clube de Benefício ASI",
      "Presença institucional permanente na base de clientes",
      "Canal estruturado de ativação de produtos financeiros",
      "Possibilidade de campanhas e ofertas direcionadas",
      "Mecanismo de incentivo direto à originação de contratos"
    ],
    highlight: "O BV não concorre dentro da plataforma. Opera como instituição financeira exclusiva do ecossistema.",
    icon: TrendingUp,
    bg: darkBg,
    isBV: true
  },
  {
    id: 11,
    title: "Branding Estratégico",
    subtitle: "Presença Institucional do Banco BV",
    content: "A marca BV estará integrada aos principais ativos do programa:",
    list: [
      "Cartão físico do Clube de Benefício ASI",
      "Plataforma digital do clube",
      "Comunicação institucional e promocional do programa"
    ],
    highlight: "A marca BV passa a fazer parte da estrutura do relacionamento, não apenas da comunicação.",
    icon: Award,
    bg: darkBg,
    isBV: true
  },
  {
    id: 12,
    title: "Diferença Competitiva",
    content: "Enquanto outras instituições atuam apenas no momento da transação, o Banco BV passa a integrar um modelo de relacionamento contínuo com o cliente ao longo de toda a vida útil do veículo.",
    highlight: "O Banco BV deixa de disputar transações e passa a construir ciclo de relacionamento.",
    icon: ShieldCheck,
    bg: darkBg,
    isBV: true
  },
  {
    id: 13,
    title: "Lógica Econômica do Modelo",
    subtitle: "Retorno indireto",
    content: "O Clube de Benefício ASI consolida uma base proprietária de clientes pós-compra, permitindo ao Banco BV acesso recorrente a um público com histórico de crédito e múltiplos gatilhos financeiros ao longo do tempo.",
    list: [
      "Cliente compra veículo → entra no clube",
      "Cliente permanece ativo na base",
      "BV ativa ofertas direcionadas",
      "Ofertas geram novos eventos de crédito",
      "Eventos geram operações financeiras"
    ],
    highlight: "Cada membro do clube representa um potencial evento financeiro futuro.",
    icon: Repeat,
    bg: darkBg,
    isBV: true
  },
  {
    id: 14,
    title: "Exclusividade",
    subtitle: "Exclusividade Institucional do Banco BV",
    content: "Banco BV passa a operar como instituição exclusiva do programa:",
    list: [
      "BV como banco associado ao Clube de Benefício ASI",
      "Exclusividade no segmento financeiro dentro da plataforma",
      "Presença institucional nas mídias internas do shopping",
      "Destaque permanente nos pontos de contato com o público",
      "Associação direta à estrutura do ecossistema ASI"
    ],
    highlight: "A presença do BV deixa de ser pontual e passa a ser estrutural.",
    icon: Award,
    bg: darkBg,
    isBV: true
  },
  {
    id: 15,
    title: "Captura do Ciclo Financeiro do Cliente",
    subtitle: "A variável estratégica",
    content: "O cliente já passou pela etapa mais valiosa para o banco:",
    list: [
      "Já adquiriu um veículo",
      "Já possui um ativo financiável",
      "Já demonstra histórico de crédito e consumo",
      "Já está inserido em um ecossistema ativo"
    ],
    highlight: "O custo de aquisição já foi pago. Agora o jogo é retenção e recorrência.",
    icon: Target,
    bg: financeBg,
    isBV: true
  },
  {
    id: 16,
    title: "Próximos Passos",
    subtitle: "Encerramento e Parceria",
    content: "O Clube de Benefício ASI está estruturado para operar com um banco exclusivo.",
    highlight: "O Banco BV quer apenas financiar operações… ou dominar um ecossistema de clientes ativos?",
    icon: Handshake,
    bg: shoppingImg,
    isClosing: true
  }
];

const Slide = ({ data, index, total }: { data: any, index: number, total: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const Icon = data.icon;
  const isBV = data.isBV;
  const isASI = data.isASI;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity: 0.4 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${data.bg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A] opacity-90" />
      </motion.div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 w-full max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">

          <div className="flex flex-col items-start gap-6 w-full md:w-1/3">
            <div className={`text-sm font-mono tracking-widest uppercase py-1 px-3 rounded-full border ${isBV ? 'border-[#3ED1F4] text-[#3ED1F4] bg-[#3ED1F4]/10' : isASI ? 'border-[#E30613] text-[#E30613] bg-[#E30613]/10' : 'border-white/20 text-white/60 bg-white/5'}`}>
              {index + 1} / {total}
            </div>

            <div className={`p-5 rounded-2xl ${isBV ? 'bg-[#233CC7]/20 text-[#3ED1F4]' : isASI ? 'bg-[#E30613]/20 text-[#E30613]' : 'glass-panel text-white/80'}`}>
              <Icon size={48} strokeWidth={1.5} />
            </div>

            {data.isClosing && (
              <div className="flex gap-4 mt-8">
                <img src={logoASI} alt="ASI" className="h-12 w-auto" />
                <img src={logoBV} alt="BV" className="h-10 w-auto mt-1" />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 w-full md:w-2/3">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`text-xl md:text-2xl font-medium mb-2 ${isBV ? 'text-[#3ED1F4]' : isASI ? 'text-[#E30613]' : 'text-white/60'}`}
              >
                {data.subtitle}
              </motion.h3>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight"
              >
                {data.title}
              </motion.h2>
            </div>

            {data.content && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-2xl text-white/80 leading-relaxed font-light mt-4"
              >
                {data.content}
              </motion.p>
            )}

            {data.list && (
              <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
                  hidden: {}
                }}
                className="flex flex-col gap-4 mt-4"
              >
                {data.list.map((item: string, i: number) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-start gap-4 text-lg md:text-xl text-white/90"
                  >
                    <ArrowRight className={`mt-1 flex-shrink-0 ${isBV ? 'text-[#3ED1F4]' : isASI ? 'text-[#E30613]' : 'text-white/40'}`} size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            {data.highlight && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={`mt-8 p-6 md:p-8 rounded-2xl border-l-4 ${isBV ? 'border-[#3ED1F4] bg-[#233CC7]/10' : isASI ? 'border-[#E30613] bg-[#E30613]/10' : 'border-white/40 glass-panel'} relative overflow-hidden`}
              >
                <div className={`text-xl md:text-2xl font-medium leading-relaxed ${isBV ? 'text-gradient-bv' : isASI ? 'text-gradient-asi' : 'text-gradient'}`}>
                  "{data.highlight}"
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </motion.div>

      {index < total - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      )}
    </section>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white selection:bg-[#233CC7] selection:text-white font-sans">

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E30613] to-[#233CC7] origin-left z-50"
        style={{ scaleX }}
      />

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${shoppingImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-6 mb-12">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                src={logoASI} alt="Logo ASI" className="h-16 md:h-24 w-auto drop-shadow-2xl"
              />
              <div className="h-12 w-[1px] bg-white/20" />
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                src={logoBV} alt="Logo BV" className="h-12 md:h-16 w-auto drop-shadow-2xl mt-2"
              />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
              <span className="text-gradient-asi">Clube de Benefício ASI</span> <br />
              <span className="text-white">Proposta de Parceria Estratégica – </span>
              <span className="text-gradient-bv">Banco BV</span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 font-medium max-w-3xl mx-auto mt-8 mb-4">
              Plataforma de ativação e relacionamento com clientes pós compra do Auto Shopping Itapoan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center gap-4 mt-8 md:mt-16"
          >
            <span className="text-sm text-white/40 font-mono tracking-widest uppercase">Explore a Oportunidade</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="text-[#3ED1F4]" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {slides.map((slide, i) => (
        <Slide key={slide.id} data={slide} index={i} total={slides.length} />
      ))}

    </main>
  );
}