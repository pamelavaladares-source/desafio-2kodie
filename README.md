# 📍 EcoMap - Painel Interativo de Logística Urbana

## 📑 Problemática
Sistemas de e-commerce e empresas de logística enfrentam problemas frequentes de digitação incorreta ou incompleta de endereços por parte dos clientes. Isso gera atrasos nas entregas, devoluções de mercadorias, retrabalho para as equipes de atendimento e aumento nos custos operacionais com fretes e reenvios.

## 🎯 Objetivo da Aplicação
O **EcoMap** é um painel interativo voltado para equipes de e-commerce e logística operarem em ambiente desktop ou mobile. Ele permite validar CEPs instantaneamente e salvá-los em um painel de monitoramento local persistente. A aplicação funciona como um hub unificado de triagem de regiões de entrega, facilitando o gerenciamento visual e a filtragem rápida de rotas por estados, cidades ou logradouros.

## 🛠️ Tecnologias Utilizadas
* **React 18** (Biblioteca para construção da interface baseada em componentes)
* **Vite** (Ferramenta de build de alta performance para o ecossistema React)
* **CSS3** (Estilização responsiva com variáveis nativas e layouts baseados em Flexbox e Grid)
* **Fetch API** (Para consumo de dados de forma assíncrona usando async/await)

## 🌐 API Utilizada
Foi utilizada a API pública e brasileira do **[ViaCEP](https://viacep.com.br)**.
* **Endpoint consultado:** `https://viacep.com.brws/{CEP}/json/`
* **Motivo da escolha:** Dispensa chaves de autenticação complexas, possui altíssima velocidade de resposta, documentação clara e retorna os dados de endereçamento nacional perfeitamente estruturados em formato JSON.

## 🚀 Principais Funcionalidades
* **🔎 Busca Avançada:** Validação em tempo real do formato do CEP (com máscara automática `99999-999`) e retorno imediato de rua, bairro, cidade e UF.
* **❤️ Painel de Favoritos (Salvar):** Permite fixar os endereços consultados em uma lista persistente local (usando o LocalStorage do navegador, os dados não somem ao recarregar a página).
* **🌎 Filtros Dinâmicos:** Barra de pesquisa interativa no painel que filtra os endereços salvos instantaneamente por nome da rua, cidade ou sigla do estado enquanto o usuário digita.
* **📊 Contador de Registros:** Indicador numérico que exibe em tempo real o total de endereços cadastrados e quantos correspondem ao filtro aplicado.
* **📱 Interface Responsiva:** Layout adaptável otimizado para o padrão Mobile-First, garantindo excelente usabilidade em celulares, tablets e monitores desktop.
* **⚠️ Tratamento de Erros:** Mensagens visuais informativas caso o usuário digite um CEP inexistente ou ocorra oscilação na rede de internet.

## 📦 Instruções para Executar o Projeto Localmente

1. Clone este repositório para sua máquina:
   ```bash
   git clone COLOQUE_O_LINK_DO_SEU_REPOSITORIO_AQUI
   ```
2. Acesse a pasta do projeto pelo terminal:
   ```bash
   cd ecomap-app
   ```
3. Instale todas as dependências do projeto:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento local:
   ```bash
   npm run dev
   ```
5. Abra o seu navegador e acesse o endereço gerado no terminal (geralmente `http://localhost:5173`).

## 🔗 Links do Projeto
* **Aplicação Publicada (Vercel):** [COLOQUE_O_LINK_DA_VERCEL_AQUI](COLOQUE_O_LINK_DA_VERCEL_AQUI)
* **Repositório Original (GitHub):** [COLOQUE_O_LINK_DO_SEU_REPOSITORIO_AQUI](COLOQUE_O_LINK_DO_SEU_REPOSITORIO_AQUI)

## 🤖 Informações sobre o uso de IA
Inteligência Artificial foi utilizada de forma colaborativa durante o desenvolvimento deste projeto para as seguintes finalidades:
* Estruturação arquitetural da separação de componentes React em pastas lógicas.
* Correção de sintaxe e interpolação de strings no método assíncrono da Fetch API (ajuste da rota dinâmica da URL).
* Refatoração e otimização das regras de CSS Grid e Media Queries para garantia do comportamento responsivo (Mobile-First).
* Apoio na formatação e redação da documentação técnica presente neste arquivo README.

---
*Desenvolvido como projeto prático para avaliação do Painel Interativo com API Pública.*
