import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Variants, VariantsSchema } from './variants.schema';

import { VariableResponseAll } from '../interfaces/variable.interface';

export type VariableDocument = Variable & Document;

@Schema()
export class Variable {
  @Prop({ unique: true })
  id: string;

  @Prop()
  family: string;

  @Prop({ type: [AxesSchema], default: [], _id: false })
  axes: VariableResponseAll[];

  @Prop({ type: [VariantsSchema], default: [], _id: false })
  variants: Variants[];
}

export const VariableSchema = SchemaFactory.createForClass(Variable);
