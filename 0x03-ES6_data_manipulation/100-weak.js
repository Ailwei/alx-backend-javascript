export const weakMap = new WeakMap();

function queryAPI(endpoint) {
    const endpointKey = JSON.stringify(endpoint);
    const count = weakMap.get(endpointKey) || 0;

    if (count >= 5) {
        throw new Error('Endpoint load is high');
    }

    weakMap.set(endpointKey, count + 1);
}
