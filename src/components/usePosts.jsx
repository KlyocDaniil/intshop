
export const useSortedProducts = (products) => {
        return products;
}

export const usePosts = (products) => {
    const sortedPosts = useSortedProducts(products)

    return () => {
        return sortedPosts;
    };
}