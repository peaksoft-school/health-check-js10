export const hours = Array.from({ length: 24 }, (_, index) => ({
   id: index + 1,
   hour: `${index + 1 < 10 ? '0' : ''}${index + 1} ч`,
}))

export const minutes = Array.from({ length: 60 }, (_, index) => ({
   id: index + 1,
   minute: `${index + 1} мин`,
}))
