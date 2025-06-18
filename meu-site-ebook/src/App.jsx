import React, { useState, useEffect } from 'react';

// Componente principal da aplicação
function App() {
  // Estado para controlar a sticky header (cabeçalho fixo)
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  // Link de pagamento da Kiwify (ATUALIZADO!)
  const kiwifyPaymentLink = "https://pay.kiwify.com.br/zzteGtS?afid=2xmHIUJ4";

  // Dados do site: Produto, Autor, Depoimentos, FAQ
  const siteData = {
    product: {
      title: 'E-BOOK ENEM - 1200 QUESTÕES DE LINGUAGENS POR CONTEÚDO E HABILIDADE',
      price: 'R$ 49,90', // Preço atualizado para Real (Brasil)
      description: 'Prepare-se de forma estratégica para o ENEM com o e-book mais completo do mercado! Contendo 1200 questões criteriosamente selecionadas de todas as edições do ENEM (2009 a 2024), organizadas por conteúdo e habilidade. Ideal para quem busca alta performance na prova de Linguagens e Códigos. Inclui gabarito detalhado e comentários exclusivos de Deco Duarte.',
      heroImageUrl: 'https://placehold.co/1920x800/1a73e8/ffffff?text=Sua+Aprova%C3%A7%C3%A3o+Come%C3%A7a+Aqui', // Imagem de destaque para o hero (placeholder azul)
      bookCoverUrl: 'https://placehold.co/600x800/2a9d8f/ffffff?text=Capa+do+E-book+ENEM', // Placeholder para a capa do livro
      features: [
        '1200 Questões de Linguagens e Códigos',
        'Aborda todas as aplicações do ENEM (2009-2024)',
        'Organizado por Conteúdo e Habilidade',
        'Gabarito Comentado e Detalhado',
        'Análises e Estratégias de Deco Duarte',
        'Acesso Imediato e Vitalício'
      ],
      whatYoullLearn: [
        'Dominar a interpretação textual e géneros literários.',
        'Compreender figuras de linguagem e suas aplicações.',
        'Analisar a variação linguística e suas nuances.',
        'Resolver questões de gramática e coesão textual.',
        'Aumentar significativamente sua pontuação em Linguagens.',
        'Otimizar seu tempo de estudo com material direcionado.'
      ],
    },
    author: {
      name: 'Deco Duarte',
      bio: 'Deco Duarte é um educador renomado e especialista em Linguagens para o ENEM, com mais de uma década de experiência transformando o desempenho de milhares de estudantes. Sua paixão por descomplicar o conteúdo e sua metodologia única resultaram em aprovações em diversas universidades pelo país. Neste e-book, Deco condensa todo o seu conhecimento e as estratégias mais eficazes para o seu sucesso.',
      imageUrl: 'https://placehold.co/300x300/424242/ffffff?text=Foto+Deco+Duarte' // Foto do autor (placeholder cinza escuro)
    },
    testimonials: [
      {
        quote: "Este e-book foi meu diferencial no ENEM! As questões comentadas são ouro. Minha nota em Linguagens disparou!",
        author: "Júlia S. - Aprovada em Medicina"
      },
      {
        quote: "A organização por habilidade é genial. Consegui focar nas minhas dificuldades e vi uma evolução absurda. Super recomendo!",
        author: "Pedro H. - Estudante Universitário"
      },
      {
        quote: "Material completo, didático e atualizado. É o guia que todo vestibulando de alto nível precisa ter.",
        author: "Larissa M. - Sonho Realizado"
      },
    ],
    faq: [
      {
        question: 'O e-book é realmente atualizado para o ENEM 2025?',
        answer: 'Sim! Nosso e-book é rigorosamente atualizado a cada edição do ENEM, incluindo questões de todas as aplicações (regulares, PPL, digital) de 2009 a 2024, garantindo a relevância do seu estudo.'
      },
      {
        question: 'Em qual formato receberei o material após a compra?',
        answer: 'Você receberá o e-book em formato PDF de alta qualidade, compatível com computadores, tablets e smartphones. O acesso é liberado imediatamente após a confirmação do pagamento via e-mail.'
      },
      {
        question: 'Posso imprimir o e-book?',
        answer: 'Sim, o e-book é formatado para permitir a impressão. Você pode imprimir ele inteiro ou apenas as seções que desejar, para estudar da forma que preferir.'
      },
      {
        question: 'Há suporte para dúvidas sobre o conteúdo?',
        answer: 'O e-book foi desenvolvido para ser autoexplicativo com seus gabaritos e comentários detalhados. Para dúvidas mais aprofundadas, acompanhe as redes sociais de Deco Duarte para lives e dicas exclusivas!'
      }
    ]
  };

  // Efeito para controlar o cabeçalho fixo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Altura a partir da qual o cabeçalho fica fixo
        setIsHeaderSticky(true);
      } else {
        setIsHeaderSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para redirecionar para o link de pagamento
  const handleBuyClick = () => {
    window.open(kiwifyPaymentLink, '_blank'); // Abre o link em uma nova aba
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased flex flex-col items-center text-gray-800">
      {/* Cabeçalho */}
      <header className={`w-full bg-white shadow-lg transition-all duration-300 z-50 ${isHeaderSticky ? 'fixed top-0 left-0 animate-slide-down' : 'relative'}`}>
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <a href="#" className="text-3xl font-extrabold text-blue-700 hover:text-blue-900 transition duration-300">
            Linguagem em Questão
          </a>
          <nav>
            <ul className="flex space-x-7">
              <li><a href="#hero" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-lg">Início</a></li>
              <li><a href="#product-details" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-lg">O E-book</a></li>
              <li><a href="#author" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-lg">Autor</a></li>
              <li><a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-lg">Depoimentos</a></li>
              <li><a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-lg">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Secção Hero - Destaque Principal */}
      <section
        id="hero"
        className="relative w-full py-40 px-4 md:px-0 bg-cover bg-center text-white flex items-center justify-center min-h-[70vh]"
        style={{ backgroundImage: `url(${siteData.product.heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-blue-800 opacity-85"></div>
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <h2 className="text-6xl md:text-7xl font-extrabold mb-7 leading-tight drop-shadow-lg animate-fade-in-up">
            Prepare-se para Vencer o ENEM!
          </h2>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto opacity-95 animate-fade-in-up delay-200">
            O único e-book com 1200 questões de Linguagens comentadas para sua aprovação.
          </p>
          <button
            onClick={handleBuyClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-14 rounded-full shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 text-2xl animate-pulse-once"
          >
            Quero Minha Aprovação Agora!
          </button>
        </div>
      </section>

      {/* Secção Detalhes do Produto */}
      <main id="product-details" className="container mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center bg-white rounded-xl shadow-2xl space-y-12 md:space-y-0 md:space-x-16 max-w-7xl my-20">
        {/* Imagem da capa do livro */}
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            src={siteData.product.bookCoverUrl}
            alt={siteData.product.title}
            className="rounded-xl shadow-3xl max-w-full h-auto transform transition duration-700 hover:scale-105"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x800/CCCCCC/000000?text=Capa+Ebook+ENEM"; }}
          />
        </div>

        {/* Informações do Produto */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-5xl font-bold text-gray-900 mb-7 leading-tight">{siteData.product.title}</h2>
          <p className="text-6xl text-blue-700 font-extrabold mb-10">{siteData.product.price}</p>
          <p className="text-gray-700 mb-10 leading-relaxed text-xl">{siteData.product.description}</p>

          {/* Lista de características */}
          <ul className="list-none text-gray-700 mb-12 space-y-4">
            {siteData.product.features.map((feature, index) => (
              <li key={index} className="flex items-center text-xl">
                <svg className="w-7 h-7 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          {/* Botão de compra */}
          <button
            onClick={handleBuyClick}
            className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-16 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105 text-2xl"
          >
            Garanta o Seu E-book!
          </button>
        </div>
      </main>

      {/* Secção "O que você vai aprender" */}
      <section className="w-full bg-blue-50 py-20 px-6 md:px-0">
        <div className="container mx-auto text-center max-w-5xl">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14">Conteúdo Exclusivo para sua Aprovação</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {siteData.product.whatYoullLearn.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl border-b-4 border-blue-400">
                <svg className="w-16 h-16 text-blue-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {/* Ícones simples para cada item de aprendizado */}
                  {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"></path>}
                  {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>}
                  {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>}
                  {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2zm2-11.5v-6m0 0L9.5 7.5M12 3.5l2.5 4M6 18h9"></path>}
                  {index === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>}
                  {index === 5 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>}
                </svg>
                <p className="text-xl font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secção "Sobre o Autor" */}
      <section id="author" className="w-full bg-white py-20 px-6 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center max-w-6xl space-y-12 md:space-y-0 md:space-x-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={siteData.author.imageUrl}
              alt={siteData.author.name}
              className="rounded-full w-72 h-72 object-cover shadow-2xl border-8 border-blue-100 transform transition duration-500 hover:scale-105 hover:shadow-3xl"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/CCCCCC/000000?text=Deco+Duarte"; }}
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Conheça {siteData.author.name}: Seu Mentor no ENEM</h3>
            <p className="text-gray-700 leading-relaxed text-xl">{siteData.author.bio}</p>
            <button
              onClick={handleBuyClick}
              className="mt-12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-xl"
            >
              Compre o E-book de Deco Duarte
            </button>
          </div>
        </div>
      </section>

      {/* Secção de Depoimentos */}
      <section id="testimonials" className="w-full bg-blue-50 py-20 px-6 md:px-0">
        <div className="container mx-auto text-center max-w-7xl">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14">O Sucesso dos Nossos Alunos Fala por Si</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {siteData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-10 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-2xl border-t-8 border-blue-500">
                <p className="text-gray-700 italic mb-8 text-xl leading-relaxed">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900 text-right text-lg">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secção de Perguntas Frequentes (FAQ) */}
      <section id="faq" className="w-full bg-white py-20 px-6 md:px-0">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-900 mb-14">Perguntas Frequentes (FAQ)</h3>
          <div className="space-y-8">
            {siteData.faq.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center px-8 py-6 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-200 focus:ring-offset-2 transition-colors duration-200 hover:bg-gray-50">
                    <span className="text-xl font-semibold text-gray-800">{item.question}</span>
                    <svg className="w-7 h-7 text-blue-600 transform transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </summary>
                  <div className="px-8 pb-6 pt-3 text-gray-700 leading-relaxed border-t border-gray-200 bg-gray-50 text-lg">
                    {item.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="w-full bg-blue-700 text-white py-20 mt-20 px-6 md:px-0">
        <div className="container mx-auto text-center max-w-5xl">
          <h3 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">Sua Aprovação no ENEM Está a Um Clique!</h3>
          <p className="text-2xl md:text-3xl mb-14">Não perca mais tempo. Invista no seu futuro com o material que realmente aprova.</p>
          <button
            onClick={handleBuyClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-16 rounded-full shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 text-2xl animate-pulse-once"
          >
            Quero Ser Aprovado Agora!
          </button>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="w-full bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; {new Date().getFullYear()} Linguagem em Questão. Todos os direitos reservados.</p>
          <p className="text-md mt-3">Desenvolvido com dedicação para o seu sucesso no ENEM.</p>
        </div>
      </footer>

      {/* Estilos e Animações */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);
        }
        @keyframes slide-down {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }

        @keyframes pulse-once {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.03);
            }
            100% {
                transform: scale(1);
            }
        }
        .animate-pulse-once {
            animation: pulse-once 1.5s ease-out 1; /* Roda apenas uma vez */
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
          .text-6xl { font-size: 3.5rem; }
          .text-7xl { font-size: 4rem; }
          .text-5xl { font-size: 2.5rem; }
          .text-4xl { font-size: 2rem; }
          .text-3xl { font-size: 1.75rem; }
          .text-2xl { font-size: 1.25rem; }
          .text-xl { font-size: 1.125rem; }
          .text-lg { font-size: 1rem; }
          .text-md { font-size: 0.875rem; }

          .py-40 { padding-top: 8rem; padding-bottom: 8rem; }
          .py-20 { padding-top: 5rem; padding-bottom: 5rem; }

          .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
          .space-y-12 > :not([hidden]) ~ :not([hidden]) {
            --tw-space-y-reverse: 0;
            margin-top: calc(3rem * calc(1 - var(--tw-space-y-reverse)));
            margin-bottom: calc(3rem * var(--tw-space-y-reverse));
          }
          .md\\:space-x-16 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
