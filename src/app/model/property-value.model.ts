import { CashFlowService } from '../services/cash-flow.service';

export class PropertyValue {
    propertyPrice: number;
    renovationCosts: number;
    marketValue: number;

    public cashFlowService : CashFlowService;

    constructor(private  _cashFlowService: CashFlowService) {
        this.cashFlowService = _cashFlowService;
      }

    calculateSMarketValue() {
        this.cashFlowService.calculateSMarketValueAA(this.marketValue, this.propertyPrice);
    }
}