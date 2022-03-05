import { SelectQueryBuilder } from "typeorm"
import { BetweenValue, FilterTypesEnum, FilterTypeValue, IFilterCriterion, } from "../tables/filter.table"
import { FilterCriteriaInfo } from "../tables/criteria.table"
import { getInValue, setValueCriteria } from "./value-criteria.util"

export function queryBuilderCriteria<T>(queryBuilder: SelectQueryBuilder<T>, criteria: FilterCriteriaInfo, additionalFilters: IFilterCriterion[] = []) {

  if ((criteria.filters != undefined && criteria.filters.length > 0) || (additionalFilters != undefined && additionalFilters.length > 0)) {
    const filters = [...criteria.filters, ...additionalFilters]
    let filterAdd = []

    filters.forEach((filter) => {
      const arrayChain = [...filter.property.split(".")]
      for (let i = 0; i < arrayChain.length - 1; i++) {
        let band = true
        for (const filter of filterAdd) {
          filter == arrayChain[i] ? band = false : ''
        }
        if (band) {
          if (i == 0) {
            queryBuilder.innerJoinAndSelect(`c.${arrayChain[i]}`, `${arrayChain[i]}`)
          } else {
            queryBuilder.innerJoinAndSelect(`${arrayChain[i - 1]}.${arrayChain[i]}`, `${arrayChain[i]}`)
          }
          filterAdd = [...filterAdd, arrayChain[i]]
        }
      }

      const alias = arrayChain.length <= 1 ? "c" : arrayChain[arrayChain.length - 2]

      let filterValue: any = filter.value

      if (filter.typeValue == FilterTypeValue.BOOLEAN) {

        const boolValue = (filterValue === 'true')
        filterValue = boolValue ? 1 : 0

      } else if (filter.typeValue == FilterTypeValue.NUMBER) {

        filterValue = Number(filterValue)
      }

      switch (filter.type) {
        case FilterTypesEnum.Equals:
          queryBuilder.andWhere(`${alias}.${arrayChain[arrayChain.length - 1]} = :${filter.property}`, {
            [filter.property]: setValueCriteria(filterValue, filter.typeValue),
          })
          break
        case FilterTypesEnum.NotEquals:
          queryBuilder.andWhere(`${alias}.${arrayChain[arrayChain.length - 1]} != :${filter.property}`, {
            [filter.property]: setValueCriteria(filterValue, filter.typeValue),
          })
          break
        case FilterTypesEnum.GreatherThan:
          queryBuilder.andWhere(`${alias}.${arrayChain[arrayChain.length - 1]} > :${filter.property}`, {
            [filter.property]: setValueCriteria(filterValue, filter.typeValue),
          })
          break
        case FilterTypesEnum.GreatherThanEquals:
          queryBuilder.andWhere(`${alias}.${arrayChain[arrayChain.length - 1]} >= :${filter.property}`, {
            [filter.property]: setValueCriteria(filterValue, filter.typeValue),
          })
          break
        case FilterTypesEnum.LowerThan:
          queryBuilder.andWhere(`${alias}.${arrayChain[arrayChain.length - 1]} < :${filter.property}`, {
            [filter.property]: setValueCriteria(filterValue, filter.typeValue),
          })
          break
        case FilterTypesEnum.LowerThanEquals:
          queryBuilder.andWhere(`${alias}.${arrayChain[arrayChain.length - 1]} <= :${filter.property}`, {
            [filter.property]: setValueCriteria(filterValue, filter.typeValue),
          })
          break
        case FilterTypesEnum.Like:
          queryBuilder.andWhere(`${alias}.${arrayChain[arrayChain.length - 1]} like :${filter.property}`, {
            [filter.property]: `%${setValueCriteria(filterValue, filter.typeValue)}%`,
          })
          break

        case FilterTypesEnum.Between:
          const between = filter.bvalue as BetweenValue
          queryBuilder.andWhere(`${alias}.${arrayChain[arrayChain.length - 1]} BETWEEN :from AND :to`, {
            from: setValueCriteria(between.from, filter.typeValue),
            to: setValueCriteria(between.to, filter.typeValue),
          })
          break
        case FilterTypesEnum.In:
          const values = getInValue(filter.value)
          queryBuilder.andWhere(
            `${alias}.${arrayChain[arrayChain.length - 1]} IN (${values})`, {
            [filter.property]: setValueCriteria(filter.value, filterValue),
          }
          )
          break
        case FilterTypesEnum.IsNull:
          queryBuilder.andWhere(`${alias}.${arrayChain[arrayChain.length - 1]} is null`)
          break
        case FilterTypesEnum.IsNotNull:
          queryBuilder.andWhere(`${alias}.${arrayChain[arrayChain.length - 1]} is not null`)
          break

      }
    })
  }

  if (criteria.sort) {
    const arrayChain = ['c', ...criteria.sort.column.split(".")]
    for (let i = 1; i < arrayChain.length - 1; i++) {
      queryBuilder.innerJoinAndSelect(`${arrayChain[i - 1]}.${arrayChain[i]}`, `${arrayChain[i]}`)
    }
    queryBuilder.orderBy(`${arrayChain[arrayChain.length - 2]}.${arrayChain[arrayChain.length - 1]}`, <"ASC" | "DESC">criteria.sort.order)
  } else {
    queryBuilder.orderBy("c.created_at", "DESC") // default sort
  }

  return queryBuilder
}
