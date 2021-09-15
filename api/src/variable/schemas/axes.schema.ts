import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Axes as AxesNames } from '../interfaces/variable.interface';

@Schema()
export class Metadata {
  @Prop()
  default: number;

  @Prop()
  min: number;

  @Prop()
  max: number;

  @Prop()
  step: number;
}

export const MetadataSchema = SchemaFactory.createForClass(Metadata);

@Schema()
export class Axes {
  @Prop()
  axes: AxesNames;

  @Prop({ type: [MetadataSchema], default: [], _id: false })
  downloads: Metadata[];
}

export const AxesSchema = SchemaFactory.createForClass(Axes);
