const files = ['a','b','c','d','e','f','g','h'];
const UNICODE = { p:{w:'\u2659',b:'\u265F'}, r:{w:'\u2656',b:'\u265C'}, n:{w:'\u2658',b:'\u265E'}, b:{w:'\u2657',b:'\u265D'}, q:{w:'\u2655',b:'\u265B'}, k:{w:'\u2654',b:'\u265A'} };
const tipsData = {
ruy: "1.e4 e5 2.Nf3 Nc6 3.Bb5 — Controle o centro rapidamente; pressione o cavalo em c6 e busque roque, depois jogadas como Re1, c3 e d4 para abrir o centro. VARIANTE DAS TROCAS: 3... a6 4.Bxc6 dxc; Variante Aberta: 3... a6 4.Ba4 Nf6 5.O-O Nxe4; VARIANTE FECHADA E MARSHALL: 3... a6 4.Ba4 Nf6 5.O-O Bxe7;",
italiana: "1.e4 e5 2.Nf3 Nc6 3.Bc4 — Bispo em c4 mira f7; jogue d3 para manter o centro estável ou c3+d4 para abrir quando for seguro. Busque desenvolvimento rápido e roque curto. Pode ser GIUCCO PIANO: 3... Bc5; GIUOCO PIANO PRINCIPAL: 3... Bc5 4.d3;  GAMBITO EVANS: 3... 4.b4; DEFESA TRÊS CAVALOS: 3...Bc5 4.Nc3; DEFESA HÚNGARA 3... Be7",
scotch: "1.e4 e5 2.Nf3 Nc6 3.d4 — Abre o centro cedo; trocas levam a posições abertas e de ataque. Desenvolva as peças rapidamente e procure atuar na coluna d e nas casas centrais. VARIANTE CLÁSSICA: 3... exd4 4.Nxd4 Bc5; VARIANTE SCHMIDT: 3... exd4 4.Nxd4 Nf6; VARIANTE MIESES: 3... exd 4.Nxd4 Nf6 5.Nxc6 bxc6 6.e5 VARIANTE STEINITZ: 3... exd4 4.Nxd4 Qh4 5.Nc3",
petrov: "1.e4 e5 2.Nf3 Nf6 — Petroff (Defesa Russa): simétrico e sólido. Procure igualar e evitar complicações táticas, mas fique atento a oportunidades de trocar e obter a iniciativa no meio-jogo. VARIANTE CLÁSSICA: 3. Nxe5 d6; VARIANTE STEINITZ: 3.d4 exd4 4.Nxd4 Qh4 5.Nc3; JOGO DOS TRÊS CAVALOS: 3. Bc4",
jogo_de_centro: "1.e4 e5 2.d4 exd4 — Centro Game: abertura direta que força trocas e desenvolvimento rápido da dama; cuidado com perda de tempos por uso prematuro da dama. VARIANTE PRINCIPAL: 3.Qxd4 Nc6 4.Qe3; VARIANTE ALTERNATIVA 3.Nf3",
kings_gambit: "1.e4 e5 2.f4 — Gambito do Rei: sacrifique f-pawn para abrir linhas e obter iniciativa. Jogue rápido, desenvolva bispos e torres para as colunas abertas e procure ataques ao rei. GAMBITO DO CAVALO ACEITO: 2... exf4 3.Nf3; GAMBITO DO BISPO: 2... exf4 3.Bc4; GAMBITO RECUSADO PRINCIPAL: 2... d6 3. Nf3; CONTRAGAMBITO: 2... d5",
evans_gambit: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 — Evans Gambit: ofereça b4 para ganhar tempo e abrir linhas; objetivo: desenvolvimento ultra-rápido e ataque no rei. Sacrifício compensado por iniciativa. PRINCIPAL ACEITO: 4... Bxb4 5.c3 Ba5; RECUSADO: 4... Bb6 5.b5",
viena: "1.e4 e5 2.Nc3 — Viena: flexível; pode transpor para gambitos com f4 (Vienna Gambit) ou para desenvolvimento sólido. Busque controlar o centro e preparar f4 se quiser linhas agudas. VARIANTE FALKBEER: 2... Nf6; VARIANTE STANLEY 2... Nf6 3.Bc4; GAMBITO VIENA: 2... Nf6 3.f4",
abertura_bispo: "1.e4 e5 2.Bc4 — Bishop's Opening: parecido ao Italiano; objetivo desenvolver com rapidez e pressionar f7. Prepare Nc3 e d3/c3 dependendo da resposta preta. DEFESA BERLIM: 2... Nf6; PRINCIPAL: 2... Nf6 3.Nc3; GAMBITO PONZIANI: 2... Nf6 3.d4; DEFESA CLÁSSICA: 2... Bc5",
ponziani: "1.e4 e5 2.Nf3 Nc6 3.c3 — Ponziani: prepara d4 e tenta ganhar espaço no centro; menos comum, mas oferece opções táticas se o adversário não conhecer as ideias. VARIANTE JAENISCH: 3... Nf6 4.d4 Nxe4 5.d5; VARIANTE LEONHARDT: 3... d5 4.Da4 Nf6 5. Nxe5; VARIANTE STEINITZ: 3...d5 4.Qa4 f6; GAMBITO CARO: 3... d5 4.Qa4 Bd7 5.exd5 Nd4 6.Qd1 Nxf3+",
quatro_cavalos: "1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 — Quatro Cavalos: jogo simétrico e posicional, com possibilidade de transposições táticas. Desenvolva calmamente e procure a melhor configuração de bispos. VARIANTE ESPANHOLA: 4.Bb5; VARIANTE SIMÉTRICA: 4.Bb5 Bb4; VARIANTE RUBINSTEIN: 4... Nd4; VARIANTE ESCOCESA: 4.d4 VARIANTE ITALIANA: 4.Bc4",
siciliana_najdorf: "1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 — Najdorf: muito teórica; brancas frequentemente buscam e4–d4–c4 e ataque no rei. Prepare planos de ataque na ala do rei e cuide de casilhas fracas. LINHA CLÁSSICA: 6.Bg5 e6 7.f4; ATAQUE INGlÊS: 6.Be3 e5 7.Cb3 Be6; ATAQUE FISCHER: 6.Bc4 e6 7.Bb3 b5; VARIANTE OPOCENSKY: 6.Be2",
siciliana_classica: "1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 — Clássica: desenvolva rapidamente e conteste o centro com ...d6 e ...e6/.e5 dependendo do momento. Evite fraquezas na ala da dama. VARIANTE NAJDORF: 5.Nc3 a6; VARIANTE DO DRAGÃO: 5.Nc3 g6; VARIANTE SCHEVENINGEN: 5.Nc3 e6",
francesa: "1.e4 e6 — Francesa: preto desafia o centro com ...d5; escolha entre linhas Advance, Tarrasch ou Winawer. Planeje resistência do centro branco e peça manobras para quebrar a estrutura preta. Quase 90% das partidas são na LINHA PRINCIPAL: 2.d4 d5 3.Nc3; VARIANTE WINAWER: 2.d4 d5 3.Nc3 Bb4; VARIANTE CLÁSSICA: 2.d4 d5 3.Nc3 Nf6 4.Bg5; VARIANTE RUBINSTEIN: 2.d4 d5 3.Nc3 dxe4 4. Nxe4",
carokann: "1.e4 c6 2.d4 d5 — Caro-Kann: estrutura sólida para o preto; jogue c3, Nd2/Nc3 e procure espaço; evite linhas que permitam ao preto simplificar e neutralizar seu jogo. VARIANTE CLÁSSICA: 3.Nc3 dxe4 4.Nxe4 Bf6; VARIANTE SMYSLOV: 3.Nc3 dxe4 4.Nxe4 Nd7; VARIANTE BRONSTEIN: 3.Nc3 dxe4 4.Nxe4 Nf6; VARIANTE DO AVANÇO: 3.e5 Bf5 VARIANTE DAS TROCAS: 3.exd5 cxd5",
pirc: "1.e4 d6 2.d4 Nf6 3.Nc3 g6 — Pirc: defesa flexível e hipermoderna; permita às brancas ocupar o centro e planeje contra-golpes no momento certo. ATAQUE AUSTRÍACO: 4.f4 Bg7 5.Nf3; CLÁSSICO (DOIS CAVALOS): 4.Nf3 Bg7 5.Be2 0-0 6.0-0",
robatsch: "1.e4 g6 — Moderna/Robatsch: fianchetto do rei e jogo contragolpe; jogue d4 e Nc3 e prepare avanço central quando possível. LINHA PRINCIPAL: 2.d4 Bg7 3.Nc3 d6 4.f4 c6 5.Nf3 Bg4",
alekhine: "1.e4 Nf6 — Alekhine: provoca avanços de peões brancos (e5) para atacá-los depois; jogue com cuidado, evite expansões excessivas sem apoio. LINHA PRINCIPAL: 2.e5 Nd5; ATAQUE DE PEÕES: 2.e5 Nd5 3.d4 d6 4.c4 Nb6 5.f4; VARIANTE DAS TROCAS: 2.e5 Nd5 3.d4 d6 4.c4 Nb6 5.f6; MODERNA: 2.e5 Nd5 3.d4 d6 4.Nf3",
escandinavia: "1.e4 d5 — Escandinava: troca precoce no centro com Qxd5; preto desenvolve rapidamente a dama mas assume risco de tempos. Busque rápido desenvolvimento e ataque às peças mal colocadas do preto. VARIANTE MIESES: 2.exd5 Dxd5 3.Nc3; VARIANTE MODERNA: 2.exd5 Nf6 3.Nc3",
nimzowitsch: "1.e4 Nc6 — Nimzowitsch Defence: incomum; desafia o centro de forma não ortodoxa e pode transpor. Mantenha desenvolvimento e tente ganhar espaço central. LINHA PRINCIPAL: 2.d4 d5 3.e5 Bf5",
queens_gambit: "1.d4 d5 2.c4 — Queen's Gambit: c4 oferece o peão para ganhar o centro. Decida entre aceitar ou recusar e jogue para controle central, desenvolvimento e pressão na coluna c. PODE SER GAMBITO ACEITO: 2... dxc4 ou RECUSADO (QUALQUER OUTRA RESPOSTA)",
colle: "1.d4 d5 2.Nf3 Nf6 — Colle: sistema sólido com idéias de c3, Bd3 e e4; foque em manobras e jogo posicional, prepare o ataque central com e4 no momento apropriado. DEFESA DO BISPO: 3.Bf5; DEFESA CLÁSSICA: 3.e6 ",
london: "1.d4 d5 2.Nf3 — London System: setup estável com Bf4, e3, c3; fácil de aprender. Desenvolva rapidamente e busque jogos com ofensiva no flanco do rei quando oportuno. ",
catalan: "1.d4 Nf6 2.c4 e6 3.g3 — Catalan: fianchetto em g2 com pressão de longo prazo na diagonal; jogue para controle de casas escuras e abertura de linhas para o bispo. VARIANTE ABERTA: 3... dxc4; VARIANTE FECHADA: Qualquer sequência sem a captura",
qga: "Queen's Gambit Accepted: 1.d4 d5 2.c4 dxc4 — Preto aceita o peão; brancas lutam por centro e desenvolvimento rápido. Recuar com a dama não é ideal — priorize c3 e e4.LINHA PRINCIPAL: 3.Nf3 Nf6 4.e3; VARIANTE CENTRAL: 3.e4 e5; ",
qgd: "Queen's Gambit Declined: 1.d4 d5 2.c4 e6 — Defesa sólida; pretas mantêm centro. Brancas devem desenvolver e procurar liberação do bispo de c1 e pressão em c-file. LINHA PRINCIPAL 3.Nc3 Nf6; DEFESA TARRASCH 3.Nc3 c5; VARIANTE ALATORSTEV: 3.Nc3 Be7; LINHA DO NF6:: 3.Nc3 Nf6 4.Bg5 Be7 5.Nf3",
defesa_eslava: "Slav: 1.d4 d5 2.c4 c6 — Defesa sólida e balançada; pretas buscam ...dxc4 em certo momento. Planeje pressão em c-file e play para d4/d5 dependendo de transposições. LINHA PRINCIPAL: 3.Nf3 Nf6; TROCA ESLAVA: 3.cxd5 cxd54.Nf3 Nf6;",
nimzo: "Nimzo-Indian 1.d4 Nf6 2.c4 e6 3.Nc3 Bb4: pretas cravam Nc3 com ...Bb4 e miram a estrutura de peões; brancas devem decidir entre e3/Qb3/a3 etc. e buscar controle do centro. VARIANTE ClÁSSICA (CAPABLANCA): 4.Qc2 0-0 5.a3 Bxc3+; SISTEMA RUBINSTEIN: 4.e3 0-0 5.Bd3 d5; VARIANTE KASPAROV: 4.Nf3 c5",
grunfeld: "Grünfeld: 1.d4 Nf6 2.c4 g6 3.Nc3 d5 — Preto permite centro branco para atacá-lo depois; brancas devem consolidar o centro e evitar trocas que facilitem o contra-ataque do preto. VARIANTE DAS TROCAS: 4.cxd5 Nxd5 5.34; SISTEMA RUSSO: 4.Nf3 Bg7 5.Qb3; VARIANTE TAIMANOV: 4.Nf3 Bg7 5.Bg5",
dutch: "Dutch Defence: 1.d4 f5 — Estrutura agressiva com ...f5; pretas buscam jogo ativo no flanco do rei. Brancas podem atacar o centro e explorar a fraqueza e4/d5 quando possível. VARIANTE LENINGRADO: 2.c4 Nf6 3.g3 g6 4.Bg2 Bg7; VARIANTE STONEWALL: 2.g3 Nf6 3.Bg2 e6",
kings_indian: "King's Indian Defence: 1.d4 Nf6 2.c4 g6 — Pretas fianchetam o bispo e buscam ...e5 ou ...c5 para contragolpe; brancas normalmente ocupam o centro e planejam expansion/ataque no flanco da dama. VARIANTE CLÁSSICA: 3.Nc3 Bg7 4.e4 d6; VARIANTE FIANQUETO: 3.Nf3 Bg7 4.g3",
english: "1.c4 — English Opening: controle por flanco e transposições; jogue b3/Bb2, g3, Nc3 e pressione o centro indiretamente. DEFESA SIMÉTRICA: 1... c5 2. Nf3 Nc6 3.d4; SICILIANO INVERTIDO: 1... e5; VARIANTE MIKENAS-CARLS: 1... Nf6 2.Nc3 e6 3.e4; DEFESA AGINCOURT: 1... e6 2.Nc3",
reti: "1.Nf3 d5 2.c4 — Réti: sistema de desenvolvimento flexível que transpoe para muitas aberturas; jogue para controlar o centro por peças e fianchetto quando adequado. ABERTURA NEO-CATALÃ: 2... e6 3.g3 Nf6; VARIANTE GAMBITO RECUSADO: 2... e6 3.d4; DEFESA ESLAVA: 2... e6 3.d4",
bird: "1.f4 — Bird's Opening: objetivo controlar e5; pode levar a jogos assimétricos e de ataque no rei. Esteja pronto para estruturas tipo Dutch invertido. LINHA PRINCIPAL: 1.. d5 2.Nf3; GAMBITO 1... e5",
larsen: "1.b3 — Larsen (Nimzo-Larsen): prepara Bb2 para pressionar o centro a partir do flanco; jogue de forma posicional e aproveite diagonais longas. VARIANTE HYPERMODERNA: 1.b3 e5 2.Bb2 Nc6 3.e3; DEFESA SICILIANA REVERSA: 1.b3 e5 2.Bb2 Nc6 3.c4",
polish: "1.b4 — Polish/Orangutan: abertura surpresa; objetivo abrir a ala da dama rapidamente. Tenha cuidado com o centro e use a surpresa para obter vantagem prática. VARIANTE SIMÉTRICA: 1... b5 2.a4; GAMBITO BIRMINGHAM: 1... c5",
grob: "1.g4 — Grob's Attack: altamente irregular e arriscada; pode funcionar como surpresa em jogos rápidos, mas teoricamente fraca. LINHA PRINCIPAL: 1.g4 d5 2.Bg2 Bxg4 3.c4; DEFESA KEENE: 1.g4 d5 2.h3 e5 3.Bg2 c6",
k_r_vs_k: "Xeque-mate básico com torre: force o rei ao bordo, mantenha seu rei perto para evitar fugas. Técnica: diminuir a 'caixa' do rei com a torre e o rei, e executar o mate em escada.",
k_q_vs_k: "Xeque-mate com dama: dama e rei colaboram para forçar mate rapidamente. Evite empatar por afogamento; use a dama para cortar casas e aproxime o rei com segurança.",
two_bishops: "Dois bispos contra rei: mate técnico onde os bispos limitam casas e o rei auxilia no encurralamento. Precisa de coordenação dos bispos e do rei para fechar casas de fuga.",
k_k_b: "Bispo + Rei vs Rei: geralmente insuficiente para mate, mas útil para bloquear e controlar casas de promoção; saiba usar o bispo para limitar o rei adversário.",
k_p_vs_k: "Rei + Peão vs Rei: aprenda oposição, casas-chave e como empurrar o peão com apoio do rei. Proteja o peão e evite trocas desnecessárias.",
king_pawn_opposition: "Exemplo de oposição: use o rei para cortar o rei adversário e permitir a promoção do peão; saiba quando triangulação ou entrar na posição inimiga é necessária."
};
const OPENINGS = [
{id:'ruy', name:'Ruy Lopez (Spanish)', moves:['e2-e4','e7-e5','g1-f3','b8-c6','f1-b5'], type:'opening'},
{id:'italiana', name:'Italian Game', moves:['e2-e4','e7-e5','g1-f3','b8-c6','f1-c4'], type:'opening'},
{id:'scotch', name:'Scotch Game', moves:['e2-e4','e7-e5','g1-f3','b8-c6','d2-d4'], type:'opening'},
{id:'petrov', name:'Petroff (Russian Defense)', moves:['e2-e4','e7-e5','g1-f3','g8-f6'], type:'opening'},
{id:'jogo_de_centro', name:'Center Game', moves:['e2-e4','e7-e5','d2-d4','e5-d4'], type:'opening'},
{id:'kings_gambit', name:"King's Gambit", moves:['e2-e4','e7-e5','f2-f4'], type:'opening'},
{id:'evans_gambit', name:'Evans Gambit', moves:['e2-e4','e7-e5','g1-f3','b8-c6','f1-c4','b4-b5', "f8-b5"], type:'opening'},
{id:'viena', name:'Vienna Game', moves:['e2-e4','e7-e5','b1-c3'], type:'opening'},
{id:'abertura_bispo', name:"Bishop's Opening", moves:['e2-e4','e7-e5','f1-c4'], type:'opening'},
{id:'ponziani', name:'Ponziani Opening', moves:['e2-e4','e7-e5','g1-f3','b8-c6','c2-c3'], type:'opening'},
{id:'quatro_cavalos', name:'Four Knights Game', moves:['e2-e4','e7-e5','g1-f3','b8-c6','b1-c3','g8-f6'], type:'opening'},
{id:'siciliana_najdorf', name:'Sicilian Najdorf', moves:['e2-e4','c7-c5','g1-f3','d7-d6','d2-d4','c5-d4','f3-d4','g8-f6','b1-c3', "a7-a6"], type:'opening'},
{id:'siciliana_classica', name:'Open Sicilian Defense', moves:['e2-e4','c7-c5','g1-f3','d7-d6','d2-d4','c5-d4','f3-d4','g8-f6'], type:'opening'},
{id:'francesa', name:'French Defense', moves:['e2-e4','e7-e6'], type:'opening'},
{id:'carokann', name:'Caro-Kann', moves:['e2-e4','c7-c6','d2-d4','d7-d5'], type:'opening'},
{id:'pirc', name:'Pirc Defense', moves:['e2-e4','d7-d6','d2-d4','g8-f6','b1-c3','g7-g6'], type:'opening'},
{id:'robatsch', name:'Modern/Robatsch', moves:['e2-e4','g7-g6'], type:'opening'},
{id:'alekhine', name:'Alekhine Defense', moves:['e2-e4','g8-f6'], type:'opening'},
{id:'escandinavia', name:'Scandinavian Defense', moves:['e2-e4','d7-d5'], type:'opening'},
{id:'nimzowitsch', name:'Nimzowitsch Defense', moves:['e2-e4','b8-c6'], type:'opening'},
{id:'queens_gambit', name:"Queen's Gambit", moves:['d2-d4','d7-d5','c2-c4'], type:'opening'},
{id:'qga', name:"Queen's Gambit Accepted (QGA)", moves:['d2-d4','d7-d5','c2-c4','d5-c4'], type:'opening'},
{id:'qgd', name:"Queen's Gambit Declined (QGD)", moves:['d2-d4','d7-d5','c2-c4','e7-e6'], type:'opening'},
{id:'defesa_eslava', name:'Slav Defense', moves:['d2-d4','d7-d5','c2-c4','c7-c6'], type:'opening'},
{id:'nimzo', name:'Nimzo-Indian', moves:['d2-d4','g8-f6','c2-c4','e7-e6','b1-c3','f8-b4'], type:'opening'},
{id:'grunfeld', name:'Grünfeld Defense', moves:['d2-d4','g8-f6','c2-c4','g7-g6','b1-c3','d7-d5'], type:'opening'},
{id:'dutch', name:'Dutch Defense', moves:['d2-d4','f7-f5'], type:'opening'},
{id:'kings_indian', name:"King's Indian Defense", moves:['d2-d4','g8-f6','c2-c4','g7-g6'], type:'opening'},
{id:'colle', name:'Colle System', moves:['d2-d4','d7-d5','g1-f3','g8-f6'], type:'opening'},
{id:'london', name:'London System', moves:['d2-d4','d7-d5','g1-f3'], type:'opening'},
{id:'catalan', name:"Catalan Opening", moves:['d2-d4','g8-f6','c2-c4','e7-e6','g2-g3'], type:'opening'},
{id:'english', name:'English Opening', moves:['c2-c4'], type:'opening'},
{id:'reti', name:'Réti Opening', moves:['g1-f3','d7-d5','c2-c4'], type:'opening'},
{id:'bird', name:"Bird's Opening", moves:['f2-f4'], type:'opening'},
{id:'larsen', name:"Larsen (Nimzo-Larsen)", moves:['b2-b3'], type:'opening'},
{id:'polish', name:'Polish/ Orangutan/ Sokolsky', moves:['b2-b4'], type:'opening'},
{id:'grob', name:"Grob's Attack", moves:['g2-g4'], type:'opening'}
];
const ENDGAMES = [
{
id:'k_r_vs_k',
name:'Rei + Torre vs Rei (Xeque-mate básico)',
placement:{ 'e1':'K','h1':'R','a8':'k' },
moves:[],
type:'endgame'
},
{
id:'k_q_vs_k',
name:'Rei + Dama vs Rei (Xeque-mate rápido)',
placement:{ 'e1':'K','d1':'Q','a8':'k' },
moves:[],
type:'endgame'
},
{
id:'k_p_vs_k',
name:'Rei + Peão vs Rei (Promoção típica)',
placement:{ 'a1':'K','e5':'p','e1':'k' },
moves:[],
type:'endgame'
},
{
id:'king_pawn_opposition',
name:'Oposição: Rei e Peão (exemplo)',
placement:{ 'd3':'K','d5':'p','d7':'k' },
moves:['d4-d5','d7-d6','d5-d6'],
type:'endgame'
},
{
id:'two_bishops',
name:'Dois Bispos vs Rei (Mate técnico)',
placement:{ 'e1':'K','c1':'B','f1':'B','a8':'k' },
moves:[],
type:'endgame'
}
];
const OPENINGS_TREE = [
{label:'Aberturas de peão do rei', children:[
{label:'Abertas', children:[{id:'ruy'},{id:'italiana'},{id:'scotch'},{id:'petrov'}, {id:'jogo_de_centro'}]},
{label:'Semi-abertas', children:[{id:'siciliana_najdorf'},{id:'siciliana_classica'},{id:'francesa'},{id:'carokann'},{id:'alekhine'},{id:'escandinavia'}, {id:'pirc'}, {id:'robatsch'}, {id:'nimzowitsch'} ]},
{label:'Gambitos e agressivas', children:[{id:'kings_gambit'},{id:'evans_gambit'},{id:'viena'},{id:'ponziani'},{id:'jogo_de_centro'}, {id:"abertura_bispo"}, {id:"quatro_cavalos"}]}
]},
{label:'Aberturas de peão da rainha', children:[
{label:'Clássicas', children:[{id:'queens_gambit'},{id:'defesa_eslava'}, {id: "colle"}, {id:'catalan'},{id:'london'}]},
{label:'Defesas indianas e contra-ataques', children:[{id:'qgd'}, {id:"qga"}, {id:'nimzo'},{id:'grunfeld'},{id:'kings_indian'},{id:'dutch'}]}
]},
{label:'Aberturas Irregulares e de Flanco', children:[
{label:'Flanco & Réti/Inglesa', children:[{id:'english'},{id:'reti'},{id:'larsen'}]},
{label:'Irregulares', children:[{id:'bird'},{id:'polish'},{id:'grob'}]}
]},
{label:'Finais Principais', children:[
{id:'k_r_vs_k'},{id:'k_q_vs_k'},{id:'k_p_vs_k'},{id:'king_pawn_opposition'},{id:'two_bishops'}
]}
];
if(typeof module !== 'undefined' && module.exports){
module.exports = { tipsData, OPENINGS, ENDGAMES, OPENINGS_TREE };
}
let board = {};
let selected = null; let turn = 'w'; let moveHistory = []; let autoplay=null;
let currentOpening = null; let openingStep = 0; let practiceMode = true;
const boardEl = document.getElementById('board');
const movesOl = document.getElementById('movesOl');
const statusEl = document.getElementById('status');
const feedbackEl = document.getElementById('feedback');
function coordToXY(sq){ return {x: files.indexOf(sq[0]), y: parseInt(sq[1]) - 1}; }
function xyToCoord(x,y){ return files[x] + (y+1); }
function createBoardDOM(){
boardEl.innerHTML = '';
for(let rank = 8; rank >= 1; rank--){
for(let f=0; f<8; f++){
const coord = files[f] + rank;
const square = document.createElement('div');
square.className = 'square ' + (((f + rank) % 2 === 0)? 'light':'dark');
square.dataset.coord = coord;
square.id = 'sq-' + coord;
square.addEventListener('click', ()=>onSquareClick(coord));
boardEl.appendChild(square);
}
}
const filesLetters=['a','b','c','d','e','f','g','h'];
const ranksNumbers=[8,7,6,5,4,3,2,1];
const filesBottom=document.createElement('div');
filesBottom.className='coord-file bottom';
filesLetters.forEach(l=>{const s=document.createElement('div');s.textContent=l;filesBottom.appendChild(s);});
const filesTop=document.createElement('div');
filesTop.className='coord-file top';
filesLetters.forEach(l=>{const s=document.createElement('div');s.textContent=l;filesTop.appendChild(s);});
const ranksLeft=document.createElement('div');
ranksLeft.className='coord-rank left';
ranksNumbers.forEach(n=>{const s=document.createElement('div');s.textContent=n;ranksLeft.appendChild(s);});
const ranksRight=document.createElement('div');
ranksRight.className='coord-rank right';
ranksNumbers.forEach(n=>{const s=document.createElement('div');s.textContent=n;ranksRight.appendChild(s);});
boardEl.appendChild(filesBottom);
boardEl.appendChild(ranksLeft);
}
function setupInitialPosition(){
board = {};
for(let f of files){ for(let r=1;r<=8;r++){ board[f + r] = null; } }
const placement = {
'a8':'r','b8':'n','c8':'b','d8':'q','e8':'k','f8':'b','g8':'n','h8':'r',
'a7':'p','b7':'p','c7':'p','d7':'p','e7':'p','f7':'p','g7':'p','h7':'p',
'a2':'P','b2':'P','c2':'P','d2':'P','e2':'P','f2':'P','g2':'P','h2':'P',
'a1':'R','b1':'N','c1':'B','d1':'Q','e1':'K','f1':'B','g1':'N','h1':'R'
};
for(const sq in placement){ const ch = placement[sq]; const color = (ch === ch.toUpperCase())? 'w':'b'; board[sq] = { type: ch.toLowerCase(), color }; }
selected = null; turn='w'; moveHistory=[]; openingStep=0; updateAll();
}
function setupCustomPosition(placementObj){
board = {};
for(let f of files){ for(let r=1;r<=8;r++){ board[f + r] = null; } }
for(const sq in placementObj){
const ch = placementObj[sq];
const color = (ch === ch.toUpperCase())? 'w':'b';
board[sq] = { type: ch.toLowerCase(), color };
}
selected = null; moveHistory = []; openingStep = 0; turn = 'w'; updateAll();
}
function updateAll(){
for(const sq in board){ const el = document.getElementById('sq-' + sq); if(!el) continue; el.innerHTML=''; el.classList.remove('highlight','lastmove','correct','incorrect'); }
for(const sq in board){ const p = board[sq]; if(p){ const el = document.getElementById('sq-' + sq); const span = document.createElement('span'); span.className = 'piece ' + p.color; span.textContent = UNICODE[p.type][p.color]; el.appendChild(span); }}
if(selected){ const sel = document.getElementById('sq-' + selected); if(sel) sel.classList.add('highlight'); }
if(moveHistory.length>0){ const last = moveHistory[moveHistory.length-1]; document.getElementById('sq-'+last.from).classList.add('lastmove'); document.getElementById('sq-'+last.to).classList.add('lastmove'); }
renderMoveList(); statusEl.textContent = (turn==='w')? 'Brancas a mover' : 'Pretas a mover';
checkScenarioEnd();
}
function updateTips(openingId) {
const tipsBox = document.getElementById('tipsBox');
tipsBox.innerHTML = `<strong>Dicas:</strong><p>${tipsData[openingId] || 'Nenhuma dica disponível para este cenário.'}</p>`;
}
function pathClear(from,to){
const a = coordToXY(from), b = coordToXY(to);
const dx = Math.sign(b.x - a.x); const dy = Math.sign(b.y - a.y);
let x = a.x + dx, y = a.y + dy;
while(x !== b.x || y !== b.y){
const c = xyToCoord(x,y);
if(board[c]) return false;
x += dx; y += dy;
}
return true;
}
function isKingInCheck(color) {
let kingPos = null;
for (let sq in board) {
if (board[sq] && board[sq].type === 'k' && board[sq].color === color) {
kingPos = sq;
break;
}
}
if (!kingPos) return false;
for (let sq in board) {
if (board[sq] && board[sq].color !== color) {
if (originalValidateMove(sq, kingPos)) {
return true;
}
}
}
return false;
}
const originalValidateMove = validateMove;
validateMove = function(from, to) {
const piece = board[from];
if (!originalValidateMove(from, to)) return false;
if (piece.type === 'k') {
const backupFrom = board[from];
const backupTo = board[to];
board[to] = piece;
board[from] = null;
const inCheck = isKingInCheck(piece.color);
board[from] = backupFrom;
board[to] = backupTo;
if (inCheck) return false;
}
const backupFrom = board[from];
const backupTo = board[to];
board[to] = piece;
board[from] = null;
const stillInCheck = isKingInCheck(piece.color);
board[from] = backupFrom;
board[to] = backupTo;
if (stillInCheck) return false;
return true;
};
function validateMove(from,to){
const piece = board[from];
if(!piece) return false;
const target = board[to];
if(target && target.color === piece.color) return false;
const a = coordToXY(from), b = coordToXY(to);
const dx = b.x - a.x, dy = b.y - a.y;
const adx = Math.abs(dx), ady = Math.abs(dy);
switch(piece.type){
case 'p':{
const dir = (piece.color==='w') ? 1 : -1;
const startRank = (piece.color==='w') ? 1 : 6;
if(dx===0 && dy===dir && !target) return true;
if(dx===0 && dy===2*dir && a.y===startRank && !target && !board[xyToCoord(a.x,a.y+dir)]) return true;
if(adx===1 && dy===dir && target && target.color!==piece.color) return true;
if(adx===1 && dy===dir && !target){
const last = moveHistory[moveHistory.length-1];
if(last && last.piece.type==='p' && Math.abs(coordToXY(last.from).y - coordToXY(last.to).y)===2){
if(last.to[0] === to[0] && coordToXY(last.to).y === a.y) return true;
}
}
return false;
}
case 'r': return (dx===0 || dy===0) && pathClear(from,to);
case 'n': return (adx===1 && ady===2) || (adx===2 && ady===1);
case 'b': return adx===ady && pathClear(from,to);
case 'q': return (adx===ady || dx===0 || dy===0) && pathClear(from,to);
case 'k':{
if(Math.max(adx,ady)===1) return true;
if(piece.color==='w' && from==='e1' && ady===0 && (to==='g1' || to==='c1')){
if(to==='g1' && !board['f1'] && !board['g1'] && board['h1']?.type==='r') return true;
if(to==='c1' && !board['b1'] && !board['c1'] && !board['d1'] && board['a1']?.type==='r') return true;
}
if(piece.color==='b' && from==='e8' && ady===0 && (to==='g8' || to==='c8')){
if(to==='g8' && !board['f8'] && !board['g8'] && board['h8']?.type==='r') return true;
if(to==='c8' && !board['b8'] && !board['c8'] && !board['d8'] && board['a8']?.type==='r') return true;
}
return false;
}
default: return false;
}
}
function executeMove(from,to,record=true){
const piece = board[from];
if(!piece) return false;
const captured = board[to] || null;
if(piece.type==='p' && to[0]!==from[0] && !captured){
const dir = (piece.color==='w')? -1 : 1;
const capSq = to[0] + (parseInt(to[1])+dir);
board[capSq] = null;
}
if(piece.type==='k' && Math.abs(coordToXY(from).x - coordToXY(to).x)===2){
if(to==='g1'){ board['f1'] = board['h1']; board['h1'] = null; }
if(to==='c1'){ board['d1'] = board['a1']; board['a1'] = null; }
if(to==='g8'){ board['f8'] = board['h8']; board['h8'] = null; }
if(to==='c8'){ board['d8'] = board['a8']; board['a8'] = null; }
}
board[to] = piece;
board[from] = null;
if(record) moveHistory.push({from,to,piece,captured});
turn = (turn==='w')? 'b':'w';
updateAll();
return true;
}
function undoMove(){
if(moveHistory.length===0) return;
const last = moveHistory.pop();
board[last.from] = last.piece;
board[last.to] = last.captured;
turn = last.piece.color; if(openingStep>0) openingStep--; updateAll();
}
function tryUserMove(from,to){
const piece = board[from]; if(!piece) return false;
if(practiceMode && currentOpening && currentOpening.type === 'opening'){
if(openingStep >= currentOpening.moves.length){ showFeedback('A abertura já terminou', 'info'); return false; }
const expected = currentOpening.moves[openingStep];
const expectedStr = expected.trim();
const attempt = `${from}-${to}`;
const expectedSide = (openingStep % 2 === 0) ? 'w' : 'b';
if(piece.color !== expectedSide){ showFeedback('Não é a vez dessa cor nesse passo da abertura', 'bad'); flashSquares([from,to],'incorrect'); return false; }
if(attempt === expectedStr){
if(!validateMove(from,to)){ showFeedback('Movimento inválido pelas regras do xadrez', 'bad'); flashSquares([from,to],'incorrect'); return false; }
executeMove(from,to,true); openingStep++; showFeedback('Correto!', 'good'); flashSquares([to],'correct');
return true;
} else {
showFeedback(`Errado — o lance esperado é ${expectedStr}`, 'bad'); flashSquares([from,to],'incorrect'); return false;
}
} else {
if(!validateMove(from,to)){ showFeedback('Movimento inválido', 'bad'); flashSquares([from,to],'incorrect'); return false; }
executeMove(from,to,true); showFeedback('Lance efetuado (modo livre)', 'info'); return true;
}
}
function onSquareClick(coord){
const piece = board[coord];
if(selected){
if(selected === coord){ selected=null; updateAll(); return; }
const ok = tryUserMove(selected, coord);
selected = null; updateAll();
return;
} else {
if(piece && piece.color === turn){ selected = coord; updateAll(); }
}
}
function flashSquares(coords, cls){
coords.forEach(c=>{ const el = document.getElementById('sq-'+c); if(el) el.classList.add(cls); });
setTimeout(()=>{ coords.forEach(c=>{ const el = document.getElementById('sq-'+c); if(el) el.classList.remove(cls); }); }, 700);
}
function showFeedback(text, type){
feedbackEl.textContent = text;
feedbackEl.style.color = (type==='good')? 'var(--good)' : (type==='bad')? 'var(--bad)' : '#ddd';
setTimeout(()=>{ feedbackEl.textContent=''; }, 2200);
}
function renderMoveList(){
movesOl.innerHTML='';
if(moveHistory.length===0) return;
for(let i=0;i<moveHistory.length;i+=2){
const li = document.createElement('li');
const w = moveToStr(moveHistory[i]);
const b = moveHistory[i+1] ? moveToStr(moveHistory[i+1]) : '';
li.textContent = w + (b ? ' ' + b : '');
movesOl.appendChild(li);
}
}
function moveToStr(mv){
if(!mv) return '';
return `${mv.from}-${mv.to}`;
}
const OPENING_INDEX = OPENINGS.reduce((acc,op,idx)=>{ acc[op.id]=idx; return acc; },{});
const ENDGAME_INDEX = ENDGAMES.reduce((acc,op,idx)=>{ acc[op.id]=idx; return acc; },{});
function getScenarioById(id){
if(OPENING_INDEX[id] !== undefined) return OPENINGS[OPENING_INDEX[id]];
if(ENDGAME_INDEX[id] !== undefined) return ENDGAMES[ENDGAME_INDEX[id]];
return null;
}
function renderTree(container, data){
data.forEach(node=>{
const item = document.createElement('div');
item.className = 'tree-item';
const label = document.createElement('div');
label.className = 'tree-label';
if(node.children){
const arrow = document.createElement('span');
arrow.className = 'tree-arrow';
arrow.textContent = '▶';
label.appendChild(arrow);
const text = document.createElement('span');
text.textContent = node.label;
label.appendChild(text);
item.appendChild(label);
const children = document.createElement('div');
children.className = 'tree-children';
renderTree(children, node.children);
item.appendChild(children);
label.addEventListener('click', ()=>{
item.classList.toggle('expanded');
});
} else {
const text = document.createElement('span');
const scenario = getScenarioById(node.id);
text.textContent = scenario ? scenario.name : node.id;
label.appendChild(text);
item.appendChild(label);
item.dataset.openingId = node.id;
label.addEventListener('click', ()=>{
document.querySelectorAll('.openings-list .tree-item').forEach(el=>el.classList.remove('active'));
document.querySelectorAll('.openings-list .tree-item').forEach(el => el.style.background = "");
item.style.background = "var(--accent)";
item.classList.add('active');
selectScenarioById(node.id);
});
}
container.appendChild(item);
});
}
function selectOpening(idx){
const listEls = document.querySelectorAll('#openingsList .tree-item');
listEls.forEach(b=>b.classList.remove('active'));
currentOpening = OPENINGS[idx]; openingStep = 0;
setupInitialPosition(); renderMoveList();
updateTips(currentOpening.id);
showFeedback(`Abertura selecionada: ${currentOpening.name}`,'info');
}
function selectScenarioById(id){
const scenario = getScenarioById(id);
if(!scenario){ showFeedback('Cenário não encontrado', 'bad'); return; }
currentOpening = scenario; openingStep = 0;
if(scenario.type === 'endgame'){
if(scenario.placement) setupCustomPosition(scenario.placement); else setupInitialPosition();
practiceMode = false;
document.getElementById('practiceState').textContent = 'OFF';
document.getElementById('btnPractice').style.background = '#2b2b2b';
showFeedback(`Final selecionado: ${scenario.name} — Modo prática desligado (use modo livre).`,'info');
} else {
setupInitialPosition();
showFeedback(`Abertura selecionada: ${scenario.name}`,'info');
}
renderMoveList();
updateTips(scenario.id);
}
function stepForward(){
if(!currentOpening || openingStep>=currentOpening.moves.length) return;
const mv = currentOpening.moves[openingStep]; const [from,to] = mv.split('-');
turn = (openingStep%2===0)? 'w':'b';
if(!validateMove(from,to)){ console.warn('Movimento inválido (stepForward)', mv); return; }
executeMove(from,to,true); openingStep++; showFeedback('Lance do cenário executado','info');
}
function stepBack(){ undoMove(); }
function playOpening(){
if(!currentOpening) return;
if(autoplay){ clearInterval(autoplay); autoplay=null; document.getElementById('btnPlay').textContent='▶'; return; }
document.getElementById('btnPlay').textContent='❚❚';
autoplay = setInterval(()=>{
if(!currentOpening || openingStep>=currentOpening.moves.length){ clearInterval(autoplay); autoplay=null; document.getElementById('btnPlay').textContent='▶'; return; }
stepForward();
}, 700);
}
function resetPosition(){
if(currentOpening && currentOpening.type === 'endgame' && currentOpening.placement){
setupCustomPosition(currentOpening.placement);
} else {
setupInitialPosition();
}
openingStep=0; showFeedback('Posição reiniciada','info');
}
document.getElementById('btnPrev').addEventListener('click', stepBack);
document.getElementById('btnNext').addEventListener('click', stepForward);
document.getElementById('btnPlay').addEventListener('click', playOpening);
document.getElementById('btnReset').addEventListener('click', resetPosition);
const btnPractice = document.getElementById('btnPractice'); const practiceState = document.getElementById('practiceState');
btnPractice.addEventListener('click', ()=>{ practiceMode = !practiceMode; practiceState.textContent = practiceMode ? 'ON' : 'OFF'; btnPractice.style.background = practiceMode ? 'linear-gradient(90deg,#2b2b2b,#1f7ab8)' : '#2b2b2b'; showFeedback('Modo prática: ' + (practiceMode?'ON':'OFF'),'info'); });
function checkScenarioEnd(){
const tipsBox = document.getElementById('tipsBox');
if(!currentOpening) return;
const baseTip = tipsData[currentOpening.id] || 'Nenhuma dica disponível para este cenário.';
if(currentOpening.moves && openingStep >= currentOpening.moves.length){
const endLabel = (currentOpening.type === 'endgame') ? 'Fim do final' : 'Fim da abertura';
tipsBox.innerHTML = `<strong>Dicas:</strong><p>${baseTip}</p><div class="end-msg">${endLabel}</div>`;
showFeedback(endLabel,'info');
} else {
tipsBox.innerHTML = `<strong>Dicas:</strong><p>${baseTip}</p>`;
}
}
createBoardDOM();
renderTree(document.getElementById('openingsList'), OPENINGS_TREE);
setupInitialPosition();
selectScenarioById('ruy');
(function(){document.addEventListener('DOMContentLoaded', function(){document.body.setAttribute('data-js-ready','1');});})();