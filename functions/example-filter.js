module.exports = (items) => {
    const itemsFiltered = items.filter(item => item.status === 'ready');
    
    return itemsFiltered;
}