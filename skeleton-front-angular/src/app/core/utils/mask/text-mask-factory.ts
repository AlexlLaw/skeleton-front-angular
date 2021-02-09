import { CepMask } from "./cep-mask";
import { CnpjMask } from './cnpj-mask';
import { Mask } from './mask';

export class TextMaskFactory {
  public createCep(): Mask {
    return new CepMask();
  }

  public createCnpj(): Mask {
    return new CnpjMask();
  }
}
