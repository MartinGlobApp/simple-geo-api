import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, Generated } from "typeorm"
import { ObjectType, Field, ID, Float } from "@nestjs/graphql"

import { BaseModel } from "src/core/lib"
import { Hole } from "src/graphql/bus/hole/entities/hole.entity"
import { User } from "src/graphql/sys/user/entities/user.entity"
import { Value } from "src/graphql/data/value/entities/value.entity"

@ObjectType()
@Entity({
  name: "log_forms",
})
export class LogForm extends BaseModel {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string

  @Field(() => Float, { nullable: false })
  @Column({nullable: false})
  from: number

  @Field(() => Float, { nullable: false })
  @Column({nullable: false})
  to: number

  @Field(() => String, { nullable: true })
  @Column({nullable: false})
  holeId: string

  @Field(() => String, { nullable: true })
  @Column( {nullable: false})
  userId: string

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  valueOrder1Id: string

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  valueOrder2Id: string

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  valueOrder3Id: string

  @Field(() => String, { nullable: true })
  @Column( {nullable: true})
  valueOrder4Id: string

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  valueOrder5Id: string

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  valueOrder6Id: string

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  valueOrder7Id: string

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  valueOrder8Id: string

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  valueOrder9Id: string

  @Field(() => String, { nullable: true })
  @Column( {nullable: true})
  valueOrder10Id: string

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  valueOrder11Id: string

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  valueOrder12Id: string

  @Field(() => String, { nullable: true })
  @Column({nullable: true})
  valueOrder13Id: string

  @Field(() => Number, { nullable: true })
  @Column({nullable: false})
  valueOrder14Id: string

  @Field(() => Number, { nullable: true })
  @Column({nullable: true})
  valueOrder15Id: string

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  comment: string

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

  @Field(() => Hole, { nullable: true })
  @ManyToOne(() => Hole, (hole) => hole.logForms, { lazy: true, })
  @JoinColumn([{ name: "hole_id", referencedColumnName: "id" }])
  hole?: Promise<Hole>  

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.logForms, { lazy: true, })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user?: Promise<User>  

  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order1logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order1_id", referencedColumnName: "id" }])
  valueOrder1?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order2logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order2_id", referencedColumnName: "id" }])
  valueOrder2?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order3logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order3_id", referencedColumnName: "id" }])
  valueOrder3?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order4logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order4_id", referencedColumnName: "id" }])
  valueOrder4?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order5logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order5_id", referencedColumnName: "id" }])
  valueOrder5?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order6logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order6_id", referencedColumnName: "id" }])
  valueOrder6?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order7logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order7_id", referencedColumnName: "id" }])
  valueOrder7?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order8logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order8_id", referencedColumnName: "id" }])
  valueOrder8?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order9logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order9_id", referencedColumnName: "id" }])
  valueOrder9?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order10logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order10_id", referencedColumnName: "id" }])
  valueOrder10?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order11logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order11_id", referencedColumnName: "id" }])
  valueOrder11?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order12logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order12_id", referencedColumnName: "id" }])
  valueOrder12?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order13logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order13_id", referencedColumnName: "id" }])
  valueOrder13?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order14logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order14_id", referencedColumnName: "id" }])
  valueOrder14?: Promise<Value>  
 
  @Field(() => Value, { nullable: true })
  @ManyToOne(() => Value, (value) => value.order15logForms, { lazy: true, })
  @JoinColumn([{ name: "value_order15_id", referencedColumnName: "id" }])
  valueOrder15?: Promise<Value> 
}
