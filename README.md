# 🧮 Valor Fiscal - Sistema Inteligente de Impostos

[![Deploy Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)](https://github.com/Froggerr10/valor-fiscal)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-green)](https://github.com/Froggerr10/valor-fiscal/releases)

## 🌟 Visão Geral

**Valor Fiscal** é um sistema inteligente para cálculo e otimização de impostos brasileiros, desenvolvido para simplificar a vida de empreendedores, contadores e empresas que precisam navegar pela complexidade tributária brasileira.

### 🎯 Diferenciais Únicos

- **🤖 IA Tributária Brasileira** - Primeira plataforma com inteligência artificial especializada em legislação fiscal brasileira
- **📊 Comparação Inteligente** - Análise automática de MEI vs Simples Nacional vs Lucro Presumido vs Lucro Real
- **⚡ Cálculo em Tempo Real** - Simulações instantâneas com dados atualizados da Receita Federal
- **🔐 Conformidade Total** - Algoritmos baseados na legislação oficial vigente
- **📱 Interface Moderna** - Design intuitivo para contadores e empreendedores

## 🚀 Funcionalidades Principais

### 📋 **Calculadoras Integradas**
- **MEI** - Microempreendedor Individual
- **Simples Nacional** - Todos os anexos (I ao VI)
- **Lucro Presumido** - IRPJ, CSLL, PIS, COFINS
- **Lucro Real** - Apuração completa mensal/trimestral

### 🧠 **Inteligência Artificial**
- **Análise Preditiva** - Projeção de impostos por cenários
- **Otimização Automática** - Sugestão do melhor regime tributário
- **Alertas Inteligentes** - Notificações sobre mudanças na legislação
- **Planejamento Tributário** - Estratégias personalizadas

### 📊 **Relatórios e Dashboards**
- **Comparativo Visual** - Gráficos interativos entre regimes
- **Projeção Anual** - Estimativas baseadas em histórico
- **Economia Fiscal** - Cálculo de economia por otimização
- **Relatórios Executivos** - Documentos para contabilidade

## 🛠️ Tecnologias

### Stack Principal
- **Frontend:** React 18 + TypeScript + Tailwind CSS
- **Backend:** Node.js + Express + TypeScript
- **Banco de Dados:** PostgreSQL + Redis (cache)
- **IA:** OpenAI GPT-4 + Anthropic Claude
- **Deploy:** Vercel (Frontend) + Railway (Backend)

### Integrações
- **Receita Federal** - APIs oficiais para consultas
- **IBGE** - Índices econômicos atualizados
- **Banco Central** - Taxas e indicadores
- **Junta Comercial** - Consulta de CNPJs

## 🎯 Casos de Uso

### Para Empreendedores
- Descobrir qual regime tributário é mais vantajoso
- Simular crescimento da empresa e impacto fiscal
- Planejar investimentos considerando impostos
- Comparar custos fiscais entre diferentes atividades

### Para Contadores
- Ferramenta profissional para consultorias
- Relatórios executivos para clientes
- Análise comparativa automatizada
- Planejamento tributário avançado

### Para Empresas
- Otimização da carga tributária
- Projeções financeiras precisas
- Compliance fiscal automatizado
- Análise de viabilidade de expansão

## 📈 Mercado e Oportunidades

### Mercado Brasileiro
- **6,4 milhões** de CNPJs ativos no Brasil
- **13,4 milhões** de MEIs registrados
- **R$ 2,1 trilhões** em arrecadação federal anual
- **85%** das empresas no Simples Nacional

### Oportunidade de Negócio
- **Falta de clareza** na legislação tributária brasileira
- **Complexidade** dos cálculos manuais
- **Necessidade** de otimização fiscal
- **Demanda** por ferramentas especializadas

## 💼 Modelo de Negócio

### Freemium
- **Gratuito:** Cálculos básicos MEI e Simples Nacional
- **Pro (R$ 29/mês):** Todas as calculadoras + relatórios
- **Enterprise (R$ 99/mês):** IA + API + suporte prioritário

### B2B
- **Contadores:** Licenciamento para escritórios contábeis
- **Software Houses:** API para integração em ERPs
- **Consultorias:** White label para empresas especializadas

## 🏗️ Arquitetura do Sistema

```
Frontend (React)
    ↓
API Gateway (Express)
    ↓
Microserviços:
├── Calculadora Service
├── IA Service (GPT-4/Claude)
├── Relatórios Service
├── Integração RF Service
└── User Management Service
    ↓
Database (PostgreSQL + Redis)
```

## 🚀 Roadmap de Desenvolvimento

### Fase 1 - MVP (30 dias)
- [ ] Calculadora MEI básica
- [ ] Calculadora Simples Nacional (Anexo I)
- [ ] Interface responsiva
- [ ] Deploy em produção

### Fase 2 - Expansão (60 dias)
- [ ] Todos os anexos do Simples Nacional
- [ ] Calculadora Lucro Presumido
- [ ] Sistema de usuários
- [ ] Relatórios básicos

### Fase 3 - IA (90 dias)
- [ ] Integração GPT-4 para análises
- [ ] Comparação inteligente entre regimes
- [ ] Sugestões de otimização
- [ ] Alertas personalizados

### Fase 4 - Enterprise (120 dias)
- [ ] Calculadora Lucro Real
- [ ] API para integrações
- [ ] Dashboard administrativo
- [ ] Múltiplos usuários por conta

## 📊 Diferenciais Competitivos

### Concorrência Atual
- **Conta Azul:** Foco em gestão, cálculos básicos
- **Omie:** ERP completo, impostos como feature
- **Sage:** Solução enterprise, complexa para PMEs
- **Planilhas Excel:** Manuais, propensas a erro

### Nossos Diferenciais
- **Especialização tributária** exclusiva
- **IA nativa** para otimização
- **Interface moderna** e intuitiva
- **Precisão** baseada em legislação oficial
- **Custo acessível** para PMEs

## 🔧 Como Executar

### Pré-requisitos
```bash
Node.js 18+
PostgreSQL 14+
Redis 6+
```

### Instalação
```bash
# Clone o repositório
git clone https://github.com/Froggerr10/valor-fiscal.git
cd valor-fiscal

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env

# Execute migrações
npm run migrate

# Inicie o desenvolvimento
npm run dev
```

### Variáveis de Ambiente
```env
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/valor_fiscal
REDIS_URL=redis://localhost:6379

# IA
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...

# APIs Externas
RECEITA_FEDERAL_API_KEY=...
BANCO_CENTRAL_API_KEY=...
```

## 📄 Legislação Base

### Marcos Legais
- **Lei Complementar 123/2006** - Simples Nacional
- **Lei 128/2008** - Microempreendedor Individual
- **Decreto 9.580/2018** - Regulamento do Imposto de Renda
- **IN RFB 1.881/2019** - Simples Nacional

### Atualizações Automáticas
- Monitoramento de mudanças na legislação
- Atualização automática de alíquotas
- Notificações sobre novas regulamentações

## 🤝 Contribuição

### Como Contribuir
1. Fork o repositório
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
4. Push para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

### Áreas de Contribuição
- **Validação de Cálculos** - Conferência com legislação
- **Novos Regimes** - Implementação de regimes específicos
- **Interface** - Melhorias de UX/UI
- **Documentação** - Tutoriais e exemplos
- **Testes** - Cobertura de casos edge

## 📞 Suporte e Contato

- **Website:** [valor-fiscal.com.br](https://valor-fiscal.com.br)
- **Email:** contato@valor-fiscal.com.br
- **LinkedIn:** [David De Cunto](https://linkedin.com/in/davidcunto)
- **Issues:** [GitHub Issues](https://github.com/Froggerr10/valor-fiscal/issues)

## 📜 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🏆 Reconhecimentos

- **Receita Federal do Brasil** - Dados oficiais e legislação
- **SEBRAE** - Orientações para microempresas
- **Fenacon** - Federação Nacional das Empresas de Serviços Contábeis
- **Comunidade Contábil** - Feedback e validações

---

## 🎉 Status do Projeto

**🚧 EM DESENVOLVIMENTO ATIVO**

- ✅ **Conceito validado** - Demanda comprovada no mercado
- ✅ **Arquitetura definida** - Stack tecnológico escolhido
- ✅ **Legislação mapeada** - Base legal estruturada
- ⏳ **MVP em desenvolvimento** - Primeiras funcionalidades
- ⏳ **Parcerias em negociação** - Contadores e consultorias

**Próximos marcos: MVP em 30 dias + Primeira validação de mercado**

---

*Desenvolvido com ❤️ para simplificar a vida tributária brasileira e democratizar o acesso a planejamento fiscal inteligente.*