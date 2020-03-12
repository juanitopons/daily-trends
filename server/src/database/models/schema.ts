import { SchemaOptions, Schema, SchemaDefinition } from 'mongoose';
import { assign } from 'lodash';

export class MasterSchema<T> extends Schema {
  constructor(definition: SchemaDefinition, options: MasterSchemaOptions<T>) {
    super(definition, options.getOptions());
  }
}

export class MasterSchemaOptions<T> {
  options: SchemaOptions;

  constructor(private schemaType: new () => T) {
    this.setOptions();
  }

  setOptions() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    this.options = {
      toObject: {
        transform: function(doc, ret) {
          // delete ret._id;
          ret = assign(new context.schemaType(), ret);
          return ret;
        },
      },
      strict: false,
    };
  }

  getOptions() {
    return this.options;
  }
}
