/**
 * Calculadora Simples Nacional
 * Base legal: Lei Complementar 123/2006
 * Atualizada conforme Resolução CGSN 154/2021
 */

class CalculadoraSimplesNacional {
  constructor() {
    this.anexos = this.getAnexos2025();
  }

  /**
   * Tabelas do Simples Nacional 2025
   * Fonte: Resolução CGSN
   */
  getAnexos2025() {
    return {
      I: { // Comércio
        faixas: [
          { ate: 180000, aliquota: 4.00, deducao: 0 },
          { ate: 360000, aliquota: 7.30, deducao: 5940 },
          { ate: 720000, aliquota: 9.50, deducao: 13860 },
          { ate: 1800000, aliquota: 10.70, deducao: 22500 },
          { ate: 3600000, aliquota: 14.30, deducao: 87300 },
          { ate: 4800000, aliquota: 19.00, deducao: 378000 }
        ]
      },
      II: { // Indústria
        faixas: [
          { ate: 180000, aliquota: 4.50, deducao: 0 },
          { ate: 360000, aliquota: 7.80, deducao: 5940 },
          { ate: 720000, aliquota: 10.00, deducao: 13860 },
          { ate: 1800000, aliquota: 11.20, deducao: 22500 },
          { ate: 3600000, aliquota: 14.70, deducao: 85500 },
          { ate: 4800000, aliquota: 30.00, deducao: 720000 }
        ]
      },
      III: { // Serviços
        faixas: [
          { ate: 180000, aliquota: 6.00, deducao: 0 },
          { ate: 360000, aliquota: 11.20, deducao: 9360 },
          { ate: 720000, aliquota: 13.50, deducao: 17640 },
          { ate: 1800000, aliquota: 16.00, deducao: 35640 },
          { ate: 3600000, aliquota: 21.00, deducao: 125640 },
          { ate: 4800000, aliquota: 33.00, deducao: 648000 }
        ]
      }
    };
  }

  /**
   * Calcula Simples Nacional
   * @param {string} anexo - 'I', 'II', 'III', 'IV', 'V'
   * @param {number} faturamento12meses - Faturamento últimos 12 meses
   * @param {number} faturamentoMensal - Faturamento do mês
   * @returns {Object} Cálculo detalhado
   */
  calcular(anexo, faturamento12meses, faturamentoMensal) {
    const tabelaAnexo = this.anexos[anexo];
    
    if (!tabelaAnexo) {
      throw new Error(`Anexo ${anexo} não encontrado`);
    }

    // Encontra a faixa correta
    const faixa = tabelaAnexo.faixas.find(f => faturamento12meses <= f.ate);
    
    if (!faixa) {
      return {
        erro: 'Faturamento excede limite do Simples Nacional',
        limite: 4800000,
        faturamento: faturamento12meses
      };
    }

    // Calcula alíquota efetiva
    const aliquotaEfetiva = ((faturamento12meses * faixa.aliquota / 100) - faixa.deducao) / faturamento12meses * 100;
    
    // Calcula imposto do mês
    const impostoMensal = faturamentoMensal * aliquotaEfetiva / 100;
    const impostoAnual = faturamento12meses * aliquotaEfetiva / 100;

    return {
      anexo,
      faturamento: {
        mensal: faturamentoMensal,
        anual12meses: faturamento12meses
      },
      faixa: {
        limite: faixa.ate,
        aliquotaNominal: faixa.aliquota,
        deducao: faixa.deducao
      },
      aliquotaEfetiva: parseFloat(aliquotaEfetiva.toFixed(4)),
      imposto: {
        mensal: parseFloat(impostoMensal.toFixed(2)),
        anual: parseFloat(impostoAnual.toFixed(2))
      },
      economia: this.calcularEconomia(anexo, faturamentoMensal, impostoMensal)
    };
  }

  /**
   * Calcula economia comparado ao Lucro Presumido
   * @param {string} anexo
   * @param {number} faturamento
   * @param {number} impostoSimples
   * @returns {Object}
   */
  calcularEconomia(anexo, faturamento, impostoSimples) {
    // Estimativa simplificada do Lucro Presumido
    const aliquotaLP = anexo === 'III' ? 16.33 : 11.33; // Aproximação
    const impostoLP = faturamento * aliquotaLP / 100;
    const economia = impostoLP - impostoSimples;
    
    return {
      impostoLucroPresumido: parseFloat(impostoLP.toFixed(2)),
      economia: parseFloat(economia.toFixed(2)),
      percentualEconomia: faturamento > 0 ? parseFloat((economia / impostoLP * 100).toFixed(2)) : 0
    };
  }

  /**
   * Determina anexo baseado no CNAE
   * @param {string} cnae - Código CNAE
   * @returns {string} Anexo recomendado
   */
  determinarAnexo(cnae) {
    const mapeamento = {
      // Comércio - Anexo I
      '47': 'I',
      '45': 'I',
      
      // Indústria - Anexo II  
      '10': 'II',
      '11': 'II',
      '12': 'II',
      
      // Serviços - Anexo III
      '62': 'III',
      '63': 'III',
      '72': 'III'
    };
    
    const divisao = cnae.substring(0, 2);
    return mapeamento[divisao] || 'III';
  }
}

module.exports = CalculadoraSimplesNacional;