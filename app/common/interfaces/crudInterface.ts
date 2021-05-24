interface Crud {
    findAll: (limit: number, page: number) => any,
    create: (resource: any) => string,
    updateById: (resourceId: any) => string,
    findById: (resourceId: any) => any,
    deleteById: (resourceId: any) => string,
    patchById: (resourceId: any) => string,
}

export { Crud }