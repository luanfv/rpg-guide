# Design Doc — Módulo Dungeons And Dragons Guide (Alto Nível)

## 1. Visão Geral

O **Dungeons And Dragons Guide** é o módulo central de conhecimento do universo de D&D. Ele organiza e disponibiliza informações sobre classes, raças, magias, itens e regras, permitindo acessar dados estruturados e semânticos para consultas e decisões automatizadas.

## 2. Objetivos

- Servir como **fonte única de verdade** para o conhecimento do universo.
- Fornecer APIs para:
  - Busca direta por conteúdo estruturado.
  - Busca semântica via embeddings, permitindo consultas contextualizadas.
- Facilitar **integração com outros módulos**: Characters, Agents e futuros módulos de jogo.
- Suportar expansão contínua de conteúdo sem impactar a arquitetura existente.

## 3. Fluxos de Uso (Alto Nível)

### 3.1 Ingestão de Conteúdo

1. Processa arquivos em markdown de pequenas partes e padronizados.
2. Embeddings são gerados para cada parte.
3. Conteúdo e embeddings são armazenados no banco de dados.

### 3.2 Consulta Semântica

1. Usuário realiza uma pergunta.
2. Sistema busca as partes mais relevantes com base nos embeddings.
3. Contexto é enviado para o modelo LLM.
4. Modelo retorna resposta contextualizada.

#### Exemplo de Input:

Pergunta: "Quais habilidades o Bárbaro ganha no nível 3?"

#### Exemplo de Output:

Resposta contextualizada: lista de habilidades e referências aos trechos do Dungeons And Dragons Guide.

### 3.3 Consulta Direta

- Busca por ID, título ou tipo.
- Retorna a entrada completa sem usar embeddings.

**Exemplo de Input:**
ID da entrada: 1234

**Exemplo de Output:**
Conteúdo completo do Bárbaro, incluindo descrição, habilidades e notas de jogo.

## 6. Tecnologias

- NestJS + TypeScript
- PostgreSQL + pgvector
- OpenAI Embeddings API
- LangChain (opcional para abstração RAG)
