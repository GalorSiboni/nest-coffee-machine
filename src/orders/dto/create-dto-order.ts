export class CreateOrderDto {
  readonly customer_name: string;
  readonly description: string;
  readonly is_boss: boolean;
  readonly price: number;
}
