import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
    content: "O Auto Shopping Itapoan não é apenas um ponto de venda. É um ambiente que concentra fluxo constante de compradores e proprietários de veículos, criando um ciclo contínuo de oportunidades comerciais e financeiras.",
    highlight: "Aqui você ancora autoridade e escala.",
    icon: Building2,
    bg: shoppingImg
  },
  {
    id: 2,
    title: "O Problema de Mercado",
    subtitle: "Comportamento do comprador de veículos",
    content: "A relação do cliente com o carro não termina na compra. Após adquirir o veículo, surgem novas necessidades: crédito, refinanciamento, upgrade, serviços, proteção, benefícios.",
    highlight: "Banco entende imediatamente isso.",
    icon: CarFront,
    bg: darkBg
  },
  {
    id: 3,
    title: "A Solução",
    subtitle: "Clube de Benefício ASI",
    content: "O Clube de Benefício ASI é uma plataforma de relacionamento destinada exclusivamente a clientes que já compraram veículos dentro do Auto Shopping Itapoan.",
    highlight: "Ponto crítico: enfatizar clientes convertidos, não leads.",
    icon: Users,
    bg: darkBg,
    isASI: true
  },
  {
    id: 4,
    title: "Lógica da Ferramenta",
    subtitle: "Como o sistema funciona",
    list: [
      "Cliente compra veículo no shopping",
      "Cliente recebe acesso ao clube",
      "Cliente ativa benefícios e vantagens",
      "Plataforma mantém relacionamento contínuo",
      "Base se torna economicamente ativável"
    ],
    highlight: "Aqui você posiciona como infraestrutura, não marketing.",
    icon: Repeat,
    bg: darkBg,
    isASI: true
  },
  {
    id: 5,
    title: "O Ativo Mais Valioso",
    subtitle: "O que realmente existe no projeto",
    content: "Estamos falando de uma base composta por proprietários de veículos, com histórico de compra recente e alto potencial de consumo financeiro ao longo do tempo.",
    highlight: "Essa frase é extremamente forte para banco.",
    icon: Target,
    bg: financeBg,
    isASI: true
  },
  {
    id: 6,
    title: "Ciclo Financeiro",
    subtitle: "Raciocínio que banco adora",
    content: "Um proprietário de veículo naturalmente passa por:",
    list: [
      "Financiamento ou refinanciamento",
      "Upgrade de carro",
      "Crédito com garantia",
      "Seguros e serviços",
      "Novas aquisições"
    ],
    highlight: "👉 comprador de carro = cliente financeiro recorrente",
    icon: TrendingUp,
    bg: darkBg
  },
  {
    id: 7,
    title: "Papel Estratégico",
    subtitle: "Onde a ferramenta ganha poder",
    content: "O clube permite ativar o cliente após a compra, mantendo vínculo com o shopping e criando oportunidades contínuas de negócios.",
    highlight: "Banco enxerga retenção + recorrência.",
    icon: ShieldCheck,
    bg: darkBg,
    isASI: true
  },
  {
    id: 8,
    title: "A Oportunidade",
    subtitle: "Para o Banco BV",
    content: "O Banco BV não entra como anunciante. Entra como instituição associada a uma base qualificada de proprietários de veículos.",
    highlight: "Isso muda completamente a percepção de investimento.",
    icon: Briefcase,
    bg: financeBg,
    isBV: true
  },
  {
    id: 9,
    title: "Benefícios Diretos",
    subtitle: "O que o BV ganha",
    list: [
      "Presença permanente na jornada do cliente",
      "Associação institucional ao clube",
      "Canal de ativação de produtos financeiros",
      "Redução de custo de aquisição",
      "Relacionamento de longo prazo"
    ],
    highlight: "Banco pensa em CAC imediatamente.",
    icon: TrendingUp,
    bg: darkBg,
    isBV: true
  },
  {
    id: 10,
    title: "Branding Estratégico",
    subtitle: "Integração à experiência",
    content: "A marca BV estará presente nos principais pontos de contato do programa:",
    list: [
      "Cartão físico do Clube de Benefício ASI",
      "Plataforma digital / site",
      "Comunicação do programa"
    ],
    highlight: "Você não está vendendo banner. Você está vendendo integração à experiência do cliente.",
    icon: Award,
    bg: darkBg,
    isBV: true
  },
  {
    id: 11,
    title: "Diferença Competitiva",
    subtitle: "Argumento de diretoria",
    content: "Enquanto outras instituições disputam o cliente apenas no momento da compra, o BV passa a se relacionar com ele durante toda a vida útil do veículo.",
    highlight: "Relacionamento contínuo vs. Transação pontual",
    icon: ShieldCheck,
    bg: darkBg,
    isBV: true
  },
  {
    id: 12,
    title: "Lógica Econômica",
    subtitle: "Retorno indireto",
    content: "O fluxo de valor é claro e contínuo:",
    highlight: "Base ativa → campanhas BV → produtos financeiros → operações",
    icon: Repeat,
    bg: darkBg,
    isBV: true
  },
  {
    id: 13,
    title: "Exclusividade",
    subtitle: "Posicionamento premium",
    list: [
      "BV como banco associado ao Clube ASI",
      "Destaque institucional dentro do shopping",
      "Associação a benefícios reais"
    ],
    highlight: "Banco valoriza território exclusivo.",
    icon: Award,
    bg: darkBg,
    isBV: true
  },
  {
    id: 14,
    title: "Visão de Futuro",
    subtitle: "A decisão lógica",
    content: "O cliente já comprou o veículo. Já tem relacionamento com crédito. Já possui um ativo financiável. A única variável passa a ser:",
    highlight: "Qual banco estará presente de forma contínua nessa jornada?",
    icon: Target,
    bg: financeBg,
    isBV: true
  },
  {
    id: 15,
    title: "Próximos Passos",
    subtitle: "Encerramento e Parceria",
    content: "Estamos prontos para integrar a excelência do Banco BV ao ecossistema de alta conversão do Clube ASI.",
    highlight: "Vamos transformar a jornada do proprietário de veículo em um ativo financeiro perpétuo.",
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

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
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
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
              <span className="text-gradient-asi">Clube ASI</span> <br/>
              <span className="text-gradient-bv">& Banco BV</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto">
              Apresentação Estratégica: Transformando a jornada do cliente em valor perpétuo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-4"
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