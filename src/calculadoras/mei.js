/**
 * Calculadora MEI - Microempreendedor Individual
 * Base legal: Lei Complementar 128/2008
 */

class CalculadoraMEI {
  constructor() {
    this.anoAtual = new Date().getFullYear();
    this.valorMensalFixo = this.getValorMensalFixo();
  }

  /**
   * Valores fixos MEI para 2025
   * Atualizados conforme Resolução CGSN
   */
  getValorMensalFixo() {
    const valores2025 = {
      comercio: 70.60,
      industria: 71.60,
      servicos: 75.60
    };
    return valores2025;
  }

  /**
   * Calcula impostos MEI
   * @param {string} atividade - 'comercio', 'industria' ou 'servicos'
   * @param {number} faturamentoMensal - Faturamento mensal
   * @param {number} meses - Número de meses no ano
   * @returns {Object} Cálculo detalhado
   */
  calcular(atividade, faturamentoMensal = 0, meses = 12) {
    const limiteAnual = 81000;
    const faturamentoAnual = faturamentoMensal * meses;
    
    // Validações
    if (faturamentoAnual > limiteAnual) {
      return {
        erro: 'Faturamento excede limite MEI de R$ 81.000 anuais',
        limite: limiteAnual,
        faturamento: faturamentoAnual,
        excesso: faturamentoAnual - limiteAnual
      };
    }

    const valorMensal = this.valorMensalFixo[atividade] || this.valorMensalFixo.servicos;
    const impostoAnual = valorMensal * meses;
    
    return {
      atividade,
      faturamentoMensal,
      faturamentoAnual,
      limite: limiteAnual,
      margemSeguranca: limiteAnual - faturamentoAnual,
      imposto: {
        mensal: valorMensal,
        anual: impostoAnual
      },
      percentualCarga: faturamentoAnual > 0 ? (impostoAnual / faturamentoAnual) * 100 : 0,
      detalhamento: {
        inss: atividade === 'servicos' ? 66.60 : 65.60,
        icms: atividade === 'comercio' || atividade === 'industria' ? 1.00 : 0,
        iss: atividade === 'servicos' ? 5.00 : 0
      }
    };
  }

  /**
   * Verifica se pode ser MEI baseado na atividade
   * @param {string} cnae - Código CNAE
   * @returns {boolean}
   */
  podeSerMEI(cnae) {
    // Lista simplificada - em produção usar tabela completa
    const cnaesPermitidos = [
      '4712100', // Comércio varejista de mercadorias em geral
      '9602501', // Cabeleireiros
      '8211300', // Fotocópias
      '7319002'  // Consultoria em publicidade
    ];
    
    return cnaesPermitidos.includes(cnae);
  }
}

module.exports = CalculadoraMEI;