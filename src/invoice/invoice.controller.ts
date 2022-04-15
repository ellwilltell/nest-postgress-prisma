import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PreviewInvoice } from './dto/preview.invoice';
import { InvoiceService } from './invoice.service';

@ApiTags('Invoice')
@Controller()
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get('previewInvoice')
  previewInvoice(@Query() previewInvoice: PreviewInvoice) {
    return this.invoiceService.previewInvoice(previewInvoice);
  }
}
