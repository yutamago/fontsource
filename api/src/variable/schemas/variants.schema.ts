import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Downloads {
  @Prop({ unique: true })
  type: 'wghtOnly' | 'full';

  @Prop()
  download: string;
}

export const DownloadSchema = SchemaFactory.createForClass(Downloads);

@Schema()
export class Variants {
  @Prop({ type: [DownloadSchema], default: [], _id: false })
  variants: Downloads[];
}

export const VariantsSchema = SchemaFactory.createForClass(Variants);
