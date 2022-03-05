import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne } from "typeorm"
import { ObjectType, Field, ID, Int } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"
import { LogType } from '../../log-type/entities/log-type.entity';
import { ValueType } from '../../value-type/entities/value-type.entity';

@ObjectType()
@Entity({
  name: "data_log_form_items",
})
export class LogFormItem extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => Int, { nullable: true })
  @Column("int")
  logTypeId: number

  @Field(() => Int, { nullable: true })
  @Column()
  valueTypeId: number

  @Field(() => Int, { nullable: true }) // De ordenamiento del 1 al 15
  @Column({})
  order: number

  @Field(() => String, { nullable: true })
  @Column()
  name: string

  @Field(() => String, { nullable: true })
  @Column()
  group: string

  @Field(() => Date, { nullable: true })
  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ type: "timestamp", default: null })
  updatedAt?: Date

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: "timestamp", default: null })
  deletedAt?: Date

  //FOREIGN KEYS

  @Field(() => LogType, { nullable: true })
  @ManyToOne(() => LogType, (logType) => logType.logFormItmes, { lazy: true })
  @JoinColumn([{ name: "log_type_id", referencedColumnName: "id" }])
  logForm?: Promise<LogType>    

  @Field(() => ValueType, { nullable: true })
  @ManyToOne(() => ValueType, (valueType) => valueType.logFormItmes, { lazy: true })
  @JoinColumn([{ name: "value_type_id", referencedColumnName: "id" }])
  valueType?: Promise<ValueType>    
}
